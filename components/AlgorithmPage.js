import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listAlgorithmss, getSubcategories, listSubcategoriess, getAlgorithms } from '../src/graphql/queries'
import AlgoViewFunction from './AlgoViewFunction';
import AceEditor from 'react-ace';
import '../node_modules/ace-builds/src-noconflict/mode-javascript'
import '../node_modules/ace-builds/src-noconflict/theme-dracula'

export default function AlgorithmPage(props) {
    const [algorithms, setAlgorithms] = useState([]);
    const [pictures, setPictures] = useState([]);
    const [picturesDescription, setPicturesDescription] = useState([]);

    useEffect(() => {
        const id = props.match.params.id //takes id from url
        // const id = 'ce11d4a4-9534-4d13-862e-67a9e5a85fe4'//dummy data (bubble sort)
        async function fetchAPI() {
            try {
                const apiData = await API.graphql(graphqlOperation(getAlgorithms, { id: id }));
                setAlgorithms(apiData.data.getAlgorithms);
                setPictures(apiData.data.getAlgorithms.picture);
                setPicturesDescription(apiData.data.getAlgorithms.pictureDescription);
            } catch (err) {
                console.log('cannot fetch algo by id: ', id, err);
            }
        }
        fetchAPI();
    }, [])


    return (
        <div>
            <AlgoViewFunction data={algorithms} />
            <AceEditor mode="javascript" theme="dracula" value={algorithms.example}
                fontSize={14} width={370} height={300} key={algorithms.id} />
        </div>
    )
}
