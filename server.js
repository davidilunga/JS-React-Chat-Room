const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const sqlite3 = require('sqlite3').verbose();

// Initialize Express and HTTP server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connect to SQLite database
const db = new sqlite3.Database(':memory:'); // In-memory for simplicity; for persistent, use './chat.db'

// Create messages table
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            content TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

// Serve static files from the frontend
app.use(express.static('client/build'));

// Socket.io connection
io.on('connection', (socket) => {
    console.log('New user connected');

    // Send all previous messages to the new user
    db.all('SELECT * FROM messages ORDER BY timestamp', (err, rows) => {
        if (err) {
            console.error(err);
            return;
        }
        socket.emit('previousMessages', rows);
    });

    // Listen for incoming chat messages
    socket.on('sendMessage', (message) => {
        const { username, content } = message;

        // Save message to SQLite database
        db.run(
            `INSERT INTO messages (username, content) VALUES (?, ?)`,
            [username, content],
            function (err) {
                if (err) {
                    console.error(err);
                    return;
                }

                // Send message to all connected clients
                io.emit('receiveMessage', {
                    id: this.lastID,
                    username,
                    content,
                    timestamp: new Date()
                });
            }
        );
    });

    // Handle user disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}
