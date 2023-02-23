import React from 'react'
import theme from '../../../Theme'

const Lable = (props) => {
  return (
    <>
    <div>
        <label htmlFor="" style={{
            color:theme.palette.primary.main,
            ...props.sx
        }} > {props.lableName}</label>
    </div>
    
    </>
  )
}

export default Lable