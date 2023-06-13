

import { useState } from 'react'
import './App.css'
import { ThemeMode } from './componentes/ThemeMode'
import { TodoForm } from './componentes/TodoForm'
import themes from './themes/theme'
import { ThemeProvider } from 'styled-components'
import { Main } from './componentes/Main'





function App() {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>

    <Main className='container' theme={themes[theme]}>
      <div
        className='d-flex column justify-content-end '
      >
        <h1
        style={{marginRight: "367px" }}
        >TodoApp</h1>
        <ThemeMode theme={theme} setTheme={setTheme}/>
      </div>
      <hr />
      
      <TodoForm />


      {/* <TodoList/> */}
    </Main>
    </ThemeProvider >
  )
}

export default App
