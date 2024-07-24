import React from 'react'

const User = (props) => {
  return (
    <div><h1>User:</h1>
        <h2>Username: {props.username}</h2>
        <h2>Userage: {props.age}</h2>
    </div>
  )
}

export default User