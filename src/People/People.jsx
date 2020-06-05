import React from 'react'

  const people=(props)=>{

    const style={
        backgroundColor:'blue',
        display:'inline-block',
        padding:'10px', 
        margin:'10px'
    }

     return (
         <div style={style}>
            <p>name {props.name}</p>
            <p>age {props.age} </p>
            <input type="text"/>
         </div>
     )
 }
export default people;