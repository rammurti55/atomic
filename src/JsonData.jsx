import React, { useState } from 'react'
import Mydata from './components/AllData'
import Form from './components/molecules/form/Form'
import Paragraph from './components/atoms/paragraph/Paragraph'
import Heading from './components/atoms/heading/Heading'
// import AllData from './components/AllData'

const JsonData = () => {
   const[udata,setuData]= useState(Mydata)
//    console.log(udata)


  return (
    <>
    <div className='manage-box' >
       <div className='row'>
            {
              udata.map((items,index)=>{
                const {category,money}=items;
                return(
                  <div className='col-sm-3 text-center mb-4' key={index} style={{width:"250"}}>
                    <Paragraph paragraph={category}/>
                    <Heading  heading={money} />
            </div>
                )
              })
            }
          </div>
  </div>
    </>
  )
}

export default JsonData