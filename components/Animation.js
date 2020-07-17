import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

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

    <div align='center'>
      <div>{props.pictures ? <img src={props.pictures[pointer]} style={{paddingTop: 20 , width: 425}}/> : null}</div>
      <p style={{ fontWeight: 'bold' }}>{props.picturesDescription ? props.picturesDescription[pointer] : null}</p>

      {/* <Button id='previous' onClick={() => {
        prevButtonCheck()
        setPointer(pointer - 1);
      }} variant="outlined" color="inherit" style={{ color: 'green' ,  fontSize: 20 , textDecoration: 'none', paddingbottom: 10}}>
                   PREVIOUS
                  </Button> */}

      <button id='previous' type='button' onClick={() => {
        prevButtonCheck()
        setPointer(pointer - 1);
      }}>PREVIOUS</button>

      {/* <Button id='previous' onClick={() => {
        nextButtonCheck()
        setPointer(pointer + 1);
      }} variant="outlined" color="inherit" style={{ color: 'green' ,  fontSize: 20 , textDecoration: 'none' , paddingbottom: 10}}>
                   NEXT
                  </Button> */}

      <button id='next' type='button' onClick={() => {
        nextButtonCheck()
        setPointer(pointer + 1);
      }}>NEXT</button>
    </div>
  )
}

// style={{paddingbottom: 20 }}
