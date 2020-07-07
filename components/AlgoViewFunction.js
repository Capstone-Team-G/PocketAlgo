import React from 'react';

const AlgoViewFunction=(props)=>{
const algoData=props.algo;
    return(
        <div key={algoData.id}>
            <p>{algoData.name}</p>
            <p>{algoData.description}</p>
        </div>
    )
}

export default AlgoViewFunction;