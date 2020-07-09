import React from 'react';

const AlgoViewFunction=(props)=>{
const data=props.data;
    return(
        <div key={data.id}>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
        </div>
    )
}

export default AlgoViewFunction;