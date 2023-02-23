import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Sidebar from '../molecules/Sidebar';
import { CircleNotifications, MonetizationOn, SignalCellularAlt } from '@mui/icons-material';
// import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';


const sidbarcontent = [{
    icon: <AddIcon />,
    title: "Dashboard"
},
{
    icon: <SignalCellularAlt />,
    title: "Analystics"
},
{
    icon: <MonetizationOn    />,
    title: "Tradig"
},
{
    icon: <CircleNotifications />,
    title: "Notifications"
},
]
const SlibarContent = () => {
    return (
    <div className='row'>
        {
            sidbarcontent.map((items,index)=>{

                return(
                    <>
                    <div className=' m-2'  key={index} style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                    <Sidebar icon={items.icon} title={items.title}/>
                    </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default SlibarContent