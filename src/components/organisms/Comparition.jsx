import React from 'react'
import img1 from "../../images/flagimage.jpg"
import Progresbar from '../molecules/Progresbar'


const comparition = [{
    img: img1,
    name: "india",
    progress: { width: "0%" },
    present:"0%"
    

}
    ,
{
    img: img1,
    name: "india",
    progress: { width: "20%" },
    present:"20%"

},
{
    img: img1,
    name: 'india',
    progress: { width: "40%" },
    present:"40%"



},
{
    img: img1,
    name: 'india',
    progress: { width: "60%" },
    present:"60%"

},
{
    img: img1,
    name: 'india',
    progress: { width: "80%" },
    present:"80%"

},
]




const Comparition = () => {
    return (
        <>
        <div className='container'>
            <h3>COMPARITION</h3>
            {/* <div className='row m-2 border p-2 rounded-pill'> */}

                {
                    comparition.map((items, index) => {
                        return (
                            <Progresbar img={items.img} name={items.name} progress={items.progress} present={items.present} />
                        )
                    })
                }

            </div>
        {/* </div> */}
        </>
    )
}

export default Comparition