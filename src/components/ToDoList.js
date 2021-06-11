import React, {useState} from 'react'
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

function ToDoList() {

 const [todos, setTodos] = useState([])
 
 // Function for performing 'adding' to do operation
 const addTodo = todo => {

    // if statement to remove all the empty spaces
    if(!todo.text || /^\s*$/.test(todo.text)) {
        return
    }
    
    // Variable to pass into the setTodos
    const newTodos = [todo, ...todos]

    setTodos(newTodos)

};

// Function for 'updating' the to do list
const updateTodo = (todoId, newValue) => {
     // if statement to remove all the empty spaces
     if(!newValue.text || /^\s*$/.test(newValue.text)) {
        return
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
    );
}

// Function for 'complete' to do operation
const completeTodo = id => {
    let updatedToDos = todos.map(todo => { 
        if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
        }
        return todo;
    })
    setTodos(updatedToDos) 
}

// Function for 'remove' to do operation
const removeTodo = id => {
    const removeArray = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArray)
}

// Generic return package
 return (
        <div>
            <h3> What is the Plan for Today</h3>
            <ToDoForm onSubmit = {addTodo} />
            <ToDo 
            todos = {todos}
            completeTodo = {completeTodo} removeTodo = {removeTodo} 
            updateTodo = {updateTodo}
            />
        </div>
    )
}

export default ToDoList
