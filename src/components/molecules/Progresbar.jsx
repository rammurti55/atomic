import React from 'react'
import Image from '../atoms/image'

const Progresbar = (props) => {
  return (
    <>
      <div className='row m-3 border p-1 rounded-pill'>
        <div className="col-sm-12 ">
          <Image src={props.img} />
          <span>{props.name}</span>
          <div className="progress " style={{ height: "5px", width: "auto",  }}>
            <div className="progress-bar" role="progressbar" style={props.progress} aria-valuenow="0" aria-valuemin="0">

            </div>
          </div>
          
          <span style={{
            fontSize: "12px",
            color: "black"
          }}>{props.present}</span>
        </div>
      </div>
    </>
  )

}

export default Progresbar