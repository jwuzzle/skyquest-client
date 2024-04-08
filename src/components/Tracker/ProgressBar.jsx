import React from 'react'
import './ProgressBar.scss'
import { useState, useEffect } from 'react'

const ProgressBar = ({width, percent}) => {

    const [value, setValue] = useState(0)

useEffect(() => {
    setValue(percent * width);
});

  return (
    <div className="progress-div" style={{width:width}}>
        <div style={{width: `${value}px`}} className="progress" />
    </div>
  )
}

export default ProgressBar