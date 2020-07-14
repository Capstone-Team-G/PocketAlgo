import React from 'react';

const AlgoViewFunction=(props)=>{
const data=props.data;
    return(
        <div key={data.id}>
            <h2 align='center'>{data.name}</h2>
            <p align='center'>{data.description}</p>
        </div>
    )
}

export default AlgoViewFunction;
