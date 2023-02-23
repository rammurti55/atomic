import React from 'react'
import Image from '../atoms/image'
import Button from '../atoms/button/Button'



export default function Member(props) {
    return (

        <>
            <div className='container'>
                <div className="row ">
                    <div className='col-sm-12'>
                        <div className='row m-2 border p-2 rounded-pill' >
                            <div className='col-sm-6'>

                                <Image src={props.img}></Image>
                                <span>{props.name}</span>
                            </div>
                            <div className='col-sm-6 text-end'  >
                                <Button >{props.post}</Button>
                            </div>
                            </div>


                        </div>
                       

                        {/* <div className="col-6 d-flex justify-content-between align-item-center">
                        <div>
                            <Image></Image>
                            <span>Ram murti</span>
                        </div>
                        <div>

                            <Button>manager</Button>
                        </div>
                    </div> */}
                    </div>


                </div>
            </>
            )
}
