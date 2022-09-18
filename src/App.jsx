import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import users from "./json/users.json"


const colors= ["#C48FB9","#A02577", "#B999DC", "#74A483","#A4951E", "#B14D8D", "#1871D8", "#308644", "#9F6601", "#E3BA01", "#5942A2", "#FB9817", "#D21B41" ]
function App() {
  const randomNumber= array => Math.floor(Math.random()*array.length)
  const getElementRandom= array  => {
    const i= randomNumber(array)
    return array[i] }
  const clickButton= () => {
    setRandomUser(getElementRandom(users))
    setRandomColor(getElementRandom(colors))
  }
  let indexUsersRandomNumber= randomNumber(users)
  let indexColorsRandomNumber= randomNumber(colors)
  const [randomUser,setRandomUser]= useState(getElementRandom(users))
  const [randomColor,setRandomColor]= useState(getElementRandom(colors))
  
  const appStyle = {background: randomColor}
  return (
    <div style={appStyle} className="App">
      <Card randomUser= {randomUser} randomColor= {randomColor} getElementRandom= {getElementRandom} users= {users} colors={colors} clickButton= {clickButton} 
      />
    </div>
  )
}

export default App
