// import { Input } from '@mui/material'
import Input from '../../atoms/Input/Input'
import Lable from '../../atoms/lable/Lable'
import Button from '../../atoms/button/Button'
// import { Icons } from '@mui/material'
import {FaHireAHelper} from 'react-icons/fa'
import Icons from '../../atoms/icons/Icons'
import Paragraph from '../../atoms/paragraph/Paragraph'
import Heading from '../../atoms/heading/Heading'

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
  <>
  {/* <div className='manage-box'>
        <div className='row'>
            {
              udata.map((items,index)=>{
                const {category,money}=items;
                return(
                  <div className='col-sm-3' key={index}>
                    <Paragraph paragraph={category}/>
                    <Heading paragraph={money}/>
            </div>

                )
              })
            }
          </div>
  </div> */}
  </>
)
}

export default Form