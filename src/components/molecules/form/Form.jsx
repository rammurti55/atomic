import { Input } from '@mui/material'
import React from 'react'
import Lable from '../../atoms/lable/Lable'

const Form = () => {
  return (
    <div>
    
            <Lable lable="Name"/>

            <Input type='text'></Input>
            <Input type='text'></Input>
            <Input type='text'></Input>
       
    </div>
  )
}

export default Form