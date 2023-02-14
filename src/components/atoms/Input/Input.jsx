import React from 'react'

const Input = (props) => {  
  return (
    
        <input type="search" onChange={ (e)=>{
          // console.log(e.target.value)
          const name=e.target.value
          // console.log(name)
          
        }
        } style={{
            borderRadius:"10px"
        }}></input>
    
  )
}

export default Input