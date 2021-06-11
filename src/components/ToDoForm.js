import React, {useState} from 'react'

function ToDoForm(props) {

    const [input, setInput] = useState('');

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
            <input type='text' placeholder="Add to Do" value={input} name="text" className='todo-input' onChange={handleChange} />
            <button className="to-do-button">Add To Do</button>
        </form>
    )
}

// Finally exporting the function of ToDoForm to import from other 
export default ToDoForm
