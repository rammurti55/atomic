import React from 'react'
import JsonData from '../../JsonData'
import Button from '../atoms/button/Button'
import Heading from '../atoms/heading/Heading'
import Image from '../atoms/image'
import Paragraph from '../atoms/paragraph/Paragraph'
import Form from './form/Form'
import img1 from '../../images/sahilsir.png'

const Navmenu = () => {

  return (
    <>
      <div className='row mt-5'>
        <div className='col-sm-7'>
          <Heading heading="DASHBOARD" />
          <Paragraph paragraph="Welcome back Andrew" />
        </div>
        <div className="col-sm-5 ">
          <div className='ml-auto'>
          <Button> Add Unit</Button>

          
            <Image src={img1}></Image>
            <span>Andrew johnstons</span>
            </div>
          </div>
        </div>
        {/* <JsonData/> */}
      </>
      )
}

      export default Navmenu