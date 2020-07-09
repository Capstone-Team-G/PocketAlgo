import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { getSubcategories } from '../src/graphql/queries'
import AlgoViewFunction from './AlgoViewFunction'

export default function DataStructurePage(props) {
    const [algorithms, setAlgorithms] = useState([]);
    const [dataStructure, setDataStructure] = useState([]);

    useEffect(() => {
        const id = props.match.params.id //takes id from url
        // const id = '30b07844-53a4-4340-ae25-a4e41d4a12ea'//dummy data 
        async function fetchAPI() {
            try {
                const apiData = await API.graphql(graphqlOperation(getSubcategories, { id: id }));
                setDataStructure(apiData.data.getSubcategories)
                setAlgorithms(apiData.data.getSubcategories.algorithms.items);
            } catch (err) {
                console.log('cannot fetch algo by id: ', id, err);
            }
        }
        fetchAPI();
    }, [])

    return (
        <div>
            <AlgoViewFunction data={dataStructure} />
            {dataStructure.picture !== null &&
                <img src={dataStructure.picture} />}
            <h5>Algorithms related to {dataStructure.name}:</h5>
            {algorithms.map(algorithm => (
                <p onClick={() => props.history.push(`/algorithms/${algorithm.id}`)}>{algorithm.name}</p>
            ))}
        </div>
    )
}
