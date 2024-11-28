import React, { useState } from 'react';
import './AuthStyle.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [inputValue, setInputValue] = useState('');
    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Login:', { inputValue});
        navigation("/chat", {state:{name:inputValue}});
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

    return (
        <div className="auth-container">
            <div class="bg-img">
                <div class="content">
                    <header>Login</header>
                    <form onSubmit={handleSubmit}>

                        <div class="field">
                            <input type="text" value={inputValue} onChange={handleInputChange} required placeholder="Username"/>
                        </div>
                        
                        <div class="field space">
                            <input type="submit" value="LOGIN"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
