import React from 'react';
import Button from './components/atoms/button/Button';
import Input from './components/atoms/Input/Input';
import Form from './components/molecules/form/Form';

const App = () => {
  return (
    <>
      <div>
        <Button onClick={() => console.log("clicked!")} sx={{
          backgroundColor: "green",
        }}>Title</Button>
        <Button onClick={() => console.log("Code!")} >Code</Button>

      </div>
      <div>
        {/* <Input />  */}
        {/* <Input />
        {/* <Form /> */}
        <Form/>

      </div>
    </>
  )
}

export default App