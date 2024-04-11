import React from 'react'
import { useState } from 'react';

const Tracker = () => {

    const [counter, setCounter] = useState(0);
    const [isMarylandClicked, setIsMarylandClicked] = useState(false)
    const [isFloridaClicked, setIsFloridaClicked] = useState(false)
    const [isVirginiaClicked, setIsVirginiaClicked] = useState(false)


    const handleClick1 = () => {
        setCounter(counter + 1);
        setIsFloridaClicked(true)
    }

    const handleClick2 = () => {
        setCounter(counter + 1);
        setIsMarylandClicked(true)
    }


    const handleClick3 = () => {
        setCounter(counter + 1);
        setIsVirginiaClicked(true)
    }
 

  return (
    <>
    <p>{counter} / 50</p>
    <button onClick={handleClick1} disabled={isFloridaClicked} enable={removeFloridaClick}>Florida</button>
    <button onClick={handleClick2} disabled={isMarylandClicked}>Maryland</button>
    <button onClick={handleClick3} disabled={isVirginiaClicked}>Virigina</button>
    </>
  )
}

export default Tracker