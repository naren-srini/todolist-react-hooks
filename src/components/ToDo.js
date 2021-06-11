import React, {useState} from 'react'

// Importing the To do form
import ToDoForm from './ToDoForm';

// Importing the react icons for use in each note
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    // Functionality that sets the value of edit State
    const [edit, setEdit] = useState(
        {
            id: null,
            value: '',
        }
    );
    
    // Functionality to submit and update a note as State
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit(
            {
                id: null,
                value: ''
            }
        )
    }
    
    // If an edit is performed and saved
    // 
    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />
    }

    // Mapping the todos to when creating each note
    // When a note is added the todos is mapped to create a template for the note with buttons 
    return todos.map ((todo, index) => (
<div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
     )) 
}

export default Todo
