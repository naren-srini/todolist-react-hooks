import React, {useState, useEffect, useRef } from 'react'

function ToDoForm(props) {

    const [input, setInput] = useState('');

    const inputRefer = useRef(null)

    useEffect(() => {
        inputRefer.current.focus()
    })

    // Creating change handle
    const handleChange = a => {setInput(a.target.value);}

    // Creating submit handle
    const handleSubmit = a => {
        a.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        
        setInput('');
};

    
    // Standard return type
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type='text' placeholder="Add your Notes here..." value={input} name="text" className='todo-input' onChange={handleChange} ref={inputRefer} />
            <button className="todo-button">Add Note</button>
        </form>
    )
}

// Finally exporting the function of ToDoForm to import from other 
export default ToDoForm
