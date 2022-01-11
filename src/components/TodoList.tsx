import React,{useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
const [todos, setTodos] = useState([]);  

const addTodo = (todo : any): void=>{
    if(!todo.text || /^\s*$/.test(todo.text)){
        return;
    }
 
    const newTodos  = [todo, ...todos] as any;
    setTodos(newTodos); 
}

const completeTodo = (id: number) =>{
    let updatedTodos = todos.map((todo: any) =>{
        if(todo.id === id){
            todo.isComplete = !todo.isComplete;
        }
        return todo;
    });
    setTodos(updatedTodos);
};
    return (
        <div>
            <h1>what's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo}/>
        </div>
    )
}

export default TodoList
