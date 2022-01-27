import './App.css';
import React from 'react';
import { Header, List, Button, Form } from './components';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className="app-container">
      <UserPage/>
    </div>
  );
}

export default App;
