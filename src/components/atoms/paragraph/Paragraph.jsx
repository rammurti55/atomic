import React from 'react'

const Paragraph = (props) => {
  return (
    <div>
        <p style={{fontSize:"5"}}>
            {props.paragraph}
        </p>
    </div>
  )
}

export default Paragraph