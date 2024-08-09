import React from 'react'
import './App.css'
import WeatherCard from './Components/WeatherCard'
const App = () => {
  return (
    <>
<WeatherCard location={"Jaipur"} temp={"40°"} pic={"https://static.toiimg.com/photo/107164723.cms"}/>  
<WeatherCard location={"Mumbai"} temp={"35°"} pic={"https://codefrog.space/cp/wp/mumbai.png"}/>  
</>
  )
}

export default App
