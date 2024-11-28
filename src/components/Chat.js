import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MessageList from './MessageList';
import { useLocation } from 'react-router-dom';
import './ChatCSS.css';

// Connect to the server
const socket = io();

const Chat = () => {
    const location = useLocation();

    const username = location.state.name;
    const [content, setContent] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Listen for previous messages from server
        socket.on('previousMessages', (messages) => {
            setMessages(messages);
        });

        // Listen for new incoming messages
        socket.on('receiveMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off();
        };
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (content.trim() && username.trim()) {
            // Send message to server
            socket.emit('sendMessage', { username, content });
            setContent('');
        }
    };

    return (
        <div className='chatroom-container'>
            <h2>Real-Time Chat</h2>
            <MessageList messages={messages} />
            <div className="chat-input-container">
                <p className='username-tag'>Signed in as: <b><i>{username}</i></b></p>
                <form onSubmit={handleSendMessage}>
                    <input
                        className="chat-input"
                        type="text"
                        placeholder="Type your message..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                    <button className="send-button" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
