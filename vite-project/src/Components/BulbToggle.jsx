import React from 'react'
import './BulbToggle.css'
const bulbonimg="https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940186lbyqngqg1y.png"
const bulboffimg="https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png"
const BulbToggle = () => {
    const [isOn, setIsOn] = React.useState(false)
    const handleToggle = () => {
        setIsOn(!isOn)
    }
  return (
    <div className='container'>
     <h1>BulbToggle</h1> 
      <img src={isOn ? bulbonimg : bulboffimg} alt="" />
      <button onClick={handleToggle}>Click me</button>
    </div>
  )
}

export default BulbToggle
