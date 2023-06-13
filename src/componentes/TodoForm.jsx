
import { useTodos } from '../reducer/useTodos';
import { useForm } from '../hooks/useForm';
import { TodoList } from './TodoList';

export const TodoForm = () => {

    const {todos, handleNewTodo,handleDeleteTodo,handleToggleTodo, handleUpdateTodo} = useTodos();
    const {description,onInputChange,onResetForm} = useForm({
        description: ""
    })
    

 
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }
        handleNewTodo(newTodo);
        onResetForm();


    }

    return (
        <>
        
        
        
        <form className='d-flex flex-column align-items-center mb-4'
              onSubmit={handleSubmit}
        >

            <input type="text" 
                
                placeholder='Agregar Todo'
                className='mb-2 w-25' 
                style={{ textAlign: "center" }} 
                name='description'
                value={description}
                onChange={onInputChange}
            />
            <button className='w-25'
                    type='submit'
                    
            
            >Guardar</button>
        </form>

        <TodoList todos={todos}
                  deleteTodo={handleDeleteTodo}
                  toggleTodo={handleToggleTodo}
                 
                  />
        </>
        


    )
    
}
