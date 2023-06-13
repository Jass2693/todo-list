import React from 'react'
// import { useTodos } from '../reducer/useTodos'

export const TodoList = ({ todos, deleteTodo, toggleTodo }) => {



  return (

    <ul >
      {
        todos && todos.map(todo => (

          <li className='d-flex justify-content-between mb-1' key={todo.id}>
            <h4 className={`${(todo.done) ? "text-decoration-line-through todoDone" : ""}`}
            >{todo.description}  </h4>
            <div >
              <button

                className={"ms-1 me-2  btn btn-outline-success"}
                onClick={() => toggleTodo(todo.id)}

              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
              </button>
           
              <button className='btn btn-outline-danger'
                onClick={() => deleteTodo(todo.id)}
              >Borrar</button>


            </div>

          </li>
        )
        )

      }



    </ul>
  )
}
