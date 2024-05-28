import React from 'react'
import './Hedar.css'
function Hedar(props) {
  return (
    <>
<div className="section-header text-center">
      <p>{props.subtitel}</p>
      <h2>{props.titel}</h2>
    </div>
    </>
  )
}
export default Hedar;