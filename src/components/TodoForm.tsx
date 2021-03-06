import React,{useState} from 'react'

function TodoForm(props : any) {
const [input,setInput] = useState('');  

const handleChange =(e: any): void =>{
    setInput(e.target.value);
}

const handleSubmit = (e : any): void =>{
    e.preventDefault();

props.onSubmit({
    id: Math.floor(Math.random()*10000),
    text: input
});    
};   
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Add a Todo' value={input} name='text' className='todo-input' onChange={handleChange}/>
            <button className='todo-button'>Add todo</button>
        </form>
    )
}

export default TodoForm
