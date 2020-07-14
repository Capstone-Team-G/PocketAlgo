import React from 'react';

const AlgoViewFunction=(props)=>{
const data=props.data;
    return(
        <div key={data.id}>
            <h2 align='center'>{data.name}</h2>
            <p align='center' style= {{paddingLeft: 50, paddingRight: 50 , paddingBottom: 40}}>{data.description}</p>
        </div>
    )
}

export default AlgoViewFunction;
