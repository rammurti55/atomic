import React from 'react'
import img1 from "../../images/sahilsir.png"

const mystyle ={
    height:"30px",
    border:"1px",
    borderRadius:"100%",
    paddingRight:"5px",
    
    
    
}



export default function Image(props) {
  return (
    <>
    <img src={props.src} alt="dsds" style={{
          height:"30px",
          border:"1px",
          borderRadius:"100%",
          paddingRight:"5px",
      ...props.sx   
     }}  />
    </>
  )
}
