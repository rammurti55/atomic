import React from 'react'
import Heading from '../atoms/heading/Heading'
import Image from '../atoms/image'
import Paragraph from '../atoms/paragraph/Paragraph'


const Allgrafs = (props) => {
  return (
<>
<Paragraph paragraph={props.name}/>
<Heading heading={props.number}/>
<Image  src={props.image} sx={props.style}/>
</>
    )
}

export default Allgrafs