import React, { useState } from 'react'


const User = (props) => {





  return (
    <div><h1>User:</h1>
        <h2>Username: {props.username}</h2>
        <h2>Userage: {props.age}</h2>
        {!props.click && <h3>The user didn't clic on button</h3>} 
        {props.click &&<h3>The user clicked on the button</h3>}
       

    </div>
  );
};

export default User