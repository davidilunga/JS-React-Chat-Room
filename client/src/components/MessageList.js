import React, { useState, useEffect, useRef } from 'react';
import './ChatCSS.css';
import { useLocation } from 'react-router-dom';

const MessageList = ({ messages, currentUser }) => {
    const location = useLocation();
    const username = location.state.name;

    const messagesEndRef = useRef(null);
    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chatroom-container">
            <div className="chat-messages">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`message-bubble ${message.username === username ? 'user' : 'other'}`}
                    >
                        <div className="user-name">{message.username}</div>
                        <span>{message.content}</span>
                        <div className="timestamp">
                            {new Date(message.timestamp).toLocaleString()}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
};

export default MessageList;
