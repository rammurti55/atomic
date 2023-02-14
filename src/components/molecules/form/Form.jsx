// import { Input } from '@mui/material'
import Input from '../../atoms/Input/Input'
import React, { useState } from 'react'
import Lable from '../../atoms/lable/Lable'
import Button from '../../atoms/button/Button'

const Form = () => {
  const formHandler = () => {
    alert("gdgd")
  }
  // const formHandler=(event)=>{
  //   event.preventdefault()
  //   const name=event.target.value
  //   alert("ddg")

  //   console.log(name)
  //   // console.log("ram")  
  //   // console.log(event.target.value)


return (
  <div>

    {/* <Lable lable="Name"/>  */}
    <form action="" className='form-group' >
      <Lable lableName="Name" />
      <Input type='text' name="name" value="" className='form-contant' ></Input>

      <Lable lableName="email" />
      <Input type='text'></Input>

      <Lable lableName="password" />
      <Input type='text'></Input>
      <div>
        <Button type="submit" className="form-group" onSubmit={formHandler}>submit</Button>
      </div>
    </form>

    {/* <input></input> */}

  </div>
)
}

export default Form