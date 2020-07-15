import React from 'react';

const AlgoViewFunction=(props)=>{
const data=props.data;
    return(
        <div key={data.id}>
            <h2 align='center' style={{fontFamily: 'Tahoma', fontWeight: 'bold', fontSize: 30, paddingTop: 10 }}> <span style={{color: 'gold'}}> /* </span> {data.name} <span style={{color: 'gold'}}> */ </span> </h2>
            <p align='center' style= {{paddingLeft: 50, paddingRight: 50 , paddingBottom: 40}}>{data.description}</p>
        </div>
    )
}

export default AlgoViewFunction;
