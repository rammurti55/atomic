import { Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Icons from '../atoms/icons/Icons';
import Paragraph from '../atoms/paragraph/Paragraph';

const Sidebar = (props) => {

  return (
<>
<Icons icon={props.icon}/>
<Paragraph paragraph={props.title }/>
</>
  )
}

export default Sidebar