import React from 'react'
import img1 from "../../images/sahilsir.png"  
import Member from '../molecules/member'



const memberdata =[
    {
    img :img1,
    name: "shubham verma",
    post:"manager"
},
{
    img :img1,
    name: "shubham verma",
    post:"manager"
},
{
    img :img1,
    name: "shubham verma",
    post:"manager"
},
{
    img :img1,
    name: "shubham verma",
    post:"manager"
},
{
    img :img1,
    name: "shubham verma",
    post:"manager",

    // progress:{width:"25%", height:"20px"}
},
]

export default function Members(props) {
  return (
      
      <>
      <div className="  ">
    <h3>Team Member</h3>
     {memberdata.map((ele,index)=>{
        return <Member img ={ele.img} name={ele.name} post={ele.post} prog={ele.progress}/>
     
    })}
    </div>
    </>
  )
}
