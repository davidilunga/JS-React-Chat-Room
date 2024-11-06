# JS-React-Chat-Room

This project is a real-time chat application that allows users to connect and communicate instantly. It uses a modern web development tech stack to enable real-time messaging, user-friendly front-end interactions, and efficient message storage.

## Tech Stack
### Backend: Node.js with Express.js
Real-Time Communication: WebSockets using Socket.io

### Frontend: React.js
Database: SQLite for storing messages

## Features
Real-time messaging with WebSocket communication
User-friendly interface built with React
Persistent message storage using SQLite
Lightweight backend with Express and Node.js

## Project Structure

**chat-app -> client**: React frontend application

**chat-app -> client -> public**: Static assets

**chat-app -> client -> src**: React components, pages, and services

**chat-app -> server**: Node.js and Express backend, defines database models for the message, Socket.io event handling, and SQLite database setup

## Getting Started
### Prerequisites

Node.js (>=23.1.0)

npm or yarn
### Installation
1. Clone the repository:

        git clone https://github.com/yourusername/real-time-chat-app.git
        cd real-time-chat-app

3. Install dependencies:

  Backend:

    cd chat-app
    npm install

  Frontend:
    
    cd /client
    npm install

#### Initialize the SQLite Database:

Navigate to the server directory.

Run the database setup script to create the necessary tables.

Start the development servers:

#### Backend:
   
    cd server
    npm start

#### Frontend:

    cd ./client
    npm start

## Running in Production
To run this application in a production environment, configure the necessary environment variables and deploy the backend and frontend as separate services. Ensure the database connection is secure and optimized for production use.

## Usage
Once the servers are running, open your browser and navigate to http://localhost:3000 to access the chat application. Open multiple browser windows to simulate different users and experience real-time messaging.

## Contributing
Contributions are welcome! Feel free to submit issues, request features, or open a pull request to improve the project.

## Fork the project.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a pull request.
