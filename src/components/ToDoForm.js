import { format } from 'prettier'
import React, {useState} from 'react'

function ToDoForm() {
    const [input, setInput] = useState('')
    
    return (
        <form className="todo-form">
            <input type='text' placeholder="Add to Do" value={input} name="text" className='todo-input' />
        </form>
    )
}

export default ToDoForm
