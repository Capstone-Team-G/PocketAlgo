import React, { useState, useEffect } from 'react';

export default function Animation(props) {
  const [pointer, setPointer] = useState(0)

  function prevButtonCheck() { //checks when deactivate "PREVIOUS" button
    if ((pointer - 1) === 0) { document.getElementById("previous").disabled = true }
    else { document.getElementById("previous").disabled = document.getElementById("next").disabled = false }
  }

  function nextButtonCheck() { //checks when deactivate "NEXT" button
    if ((pointer + 1) === props.pictures.length - 1) { document.getElementById("next").disabled = true }
    else { document.getElementById("next").disabled = document.getElementById("previous").disabled = false }
  }

  useEffect(() => {
    document.getElementById("previous").disabled = true //sets "PREVIOUS" button as inactive when page loaded
  }, [])

  return (

    <div>
      <h1>{props.pictures ? props.pictures[pointer] : null}</h1>
      <p>{props.picturesDescription ? props.picturesDescription[pointer] : null}</p>
      <button id='previous' type='button' onClick={() => {
        prevButtonCheck()
        setPointer(pointer - 1);
      }}>PREVIOUS</button>

      <button id='next' type='button' onClick={() => {
        nextButtonCheck()
        setPointer(pointer + 1);
      }}>NEXT</button>
    </div>
  )
}
