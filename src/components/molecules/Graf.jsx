import React from 'react'
import Allgrafs from '../organisms/Allgrafs'
import img1 from '../../images/share.jpg'


const grafrecord = [{
    name: "italy",
    number: "475",
    img:img1,

    style:{width:"150px",height:"60px",borderRadius:"none"}


},
{
    name: "italy",
    number: "475",
    img:img1,

    style:{width:"150px",height:"60px",borderRadius:"none"}

},
{
    name: "italy",
    number: "475",
    img:img1,

    style:{width:"150px",height:"60px",borderRadius:"none"}


},
{
    name: "italy",
    number: "475",
    img:img1,

    style:{width:"150px",height:"60px",borderRadius:"none"}


},
{
    name: "italy",
    number: "475",
    img:img1,

    style:{width:"150px",height:"60px",borderRadius:"none"}
    

},
{
    name: "italy",
    number: "475",
    img:img1,

style:{width:"150px",height:"60px",borderRadius:"none"}
},]
const Graf = () => {

    return (
        <div className='row   shadow  mb-5 bg-white rounded'>

            {
                grafrecord.map((items, index) => {
                    return (
                        <div className="col-sm-2 text-center ">
                        <Allgrafs name={items.name} number={items.number} image={items.img} style={items.style}/>
            </div>
                )
                })
            }

        </div>
    )
}

export default Graf