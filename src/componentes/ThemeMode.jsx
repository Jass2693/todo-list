import  { useState } from 'react'
import { ModeButton } from './ModeButton'

export const ThemeMode = (props) => {
  const [mode, setMode] = useState(true)
  const handleMode = () => {
    setMode(!mode)
    if(props.theme == "light") {

      props.setTheme("dark")
    } else {props.setTheme("light")}
  }
  
  return (
    <div className='theme-mode'
          style={{border: mode ? "1px solid black" : "1px solid white"}}
    >
        <ModeButton onClick={handleMode} mode={mode}/>
    </div>
  )
}
