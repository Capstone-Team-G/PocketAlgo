import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listAlgorithmss,getSubcategories,listSubcategoriess} from '../src/graphql/queries'
import AlgoViewFunction from './AlgoViewFunction';

export default function AlgorithmPage() {
    const [subCategory, setSubCategory] = useState([]);
    const [algorithms, setAlgorithms] = useState([]);

    useEffect(() => {
        // const id = this.props.match.params.id //takes id from url
        const id = 'ecfc3985-c704-4511-9474-03f6ff7404d3'//dummy data (bubble sort)
        async function fetchAPI() {
            try {
            //     const apiData = await API.graphql(graphqlOperation(listSubcategoriess, {
            //         filter: {
            //             id: {
            //                 eq: id
            //             }
            //         }
            //     }
            //     ))
                const apiData = await API.graphql(graphqlOperation(getSubcategories,{id:id}));
                setAlgorithms(apiData.data.getSubcategories.algorithms);
                setSubCategory(apiData.data.getSubcategories);
            } catch (err) {
                console.log('cannot fetch algo by id: ', id, err);
            }
        }
        fetchAPI();
        
    }, [])

    console.log(subCategory,algorithms);
    return (
        <AlgoViewFunction algo={subCategory} />
    )
}