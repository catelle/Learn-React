import React, { useState } from 'react'


const User = (props) => {

const [click, setClick]= useState(false);

const clickBut= ()=>{
    setClick(true)
}

  return (
    <div><h1>User:</h1>
        <h2>Username: {props.username}</h2>
        <h2>Userage: {props.age}</h2>
        {!click && <h3>The user didn't clic on button</h3>} 
        {click &&<h3>The user clicked on the button</h3>}
        <button onClick={clickBut}>click</button>

    </div>
  )
}

export default User