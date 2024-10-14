import React from 'react';
import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';
import PersonRemove from './components/PersonRemove';
import PersonUpdate from './components/PersonUpdate';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <div className="form-container">
        <h2>Add User</h2>
        <PersonAdd />
      </div>
      <div className="list-container">
        <h2>User List</h2>
        <PersonList />
      </div>
      <div className="form-container">
        <h2>Remove User</h2>
        <PersonRemove />
      </div>
      <div className="form-container">
        <h2>Update User</h2>
        <PersonUpdate />
      </div>
    </div>
  );
}

export default App;
