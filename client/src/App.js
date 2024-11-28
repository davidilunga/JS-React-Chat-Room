import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/chat" element={<Chat />} />
              <Route path="/" exact element={<Login/>} />
          </Routes>
      </Router>
  );
};

export default App;


/*import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Signup/>
    </div>
  );
}

export default App;*/