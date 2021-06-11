import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
// import ToDoForm from './components/ToDoForm';


function App() {
  return (
    <div className="to-do-list">
      <h1> To Do Application</h1>
     <ToDoList/>
    </div>
  );
}

export default App;
