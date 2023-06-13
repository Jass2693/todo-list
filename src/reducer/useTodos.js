import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";



export const useTodos = () => {
    
    
    const initialState = [
        {
            id: 0,
            done: false,
            description: "hacer una lista de tareas"
        }]
        
        const init = ()=>{
            return JSON.parse(localStorage.getItem("todos") || initialState ) 
        } ;


  

    const [todos, dispatch] = useReducer(todoReducer, initialState,init);

    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));
        }, [todos])

    const handleNewTodo = (todo) =>{
        const action = {
            type: "add_todo",
            payload: todo
        }
        dispatch(action)
    }
    const handleDeleteTodo = (id) =>{
        dispatch({
            type: "remove_todo",
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: "toggle_todo",
            payload: id
        });
    }
 
    return {

        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}