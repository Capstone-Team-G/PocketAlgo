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


        <Button paddingbottom="20px" paddingRight="20px" variant="outlined" color="inherit" style={{ color: 'green' ,  fontSize: 12 , fontWeight: 'bold', textDecoration: 'none'}}>
      <p id='previous' onClick={() => {
        prevButtonCheck()
        setPointer(pointer - 1);
      }}>PREV.</p>
        </Button>

        <Button paddingbottom="20px" paddingLeft="20px" variant="outlined" color="inherit" style={{ color: 'green' ,  fontSize: 12 , fontWeight: 'bold', textDecoration: 'none'}}>
      <p id='next' onClick={() => {
        nextButtonCheck()
        setPointer(pointer + 1);
      }}>NEXT</p>
      </Button>
      <br></br>
      <div align='left' padding='20px'><h1 style= {{color: 'black', fontFamily: 'true north' , fontFamily: 'Rock Salt', fontSize: 14}} align= "center"> <span style={{color: 'gold' , fontSize: 12}}> /* </span> P o w e r _ Y o u r _ C o d e : <span style={{color: 'gold' , fontSize: 12}}> */ </span> <img src='https://media.istockphoto.com/vectors/cartoon-of-businessman-holding-arrow-sign-pointing-down-vector-id926829172?k=6&m=926829172&s=612x612&w=0&h=DZFHTii7JE8zqJJMNWbcV1nhHaaOVvmcQ4JpoFS1dLA=' height='80px' width='80px' ></img></h1></div>

    </div>
  )
}

