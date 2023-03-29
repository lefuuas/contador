import React from 'react'
import "./index.css"

const Conter = ({Number,myref}) => {
  return (
    <div className='contador-div' ref={myref}>{Number}</div>
  )
}

export default Conter