import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { getAlgorithms } from '../src/graphql/queries'
import AlgoViewFunction from './AlgoViewFunction';
import AceEditor from 'react-ace';
import '../node_modules/ace-builds/src-noconflict/mode-javascript'
import '../node_modules/ace-builds/src-noconflict/theme-dracula'
import Animation from './Animation'

export default function AlgorithmPage(props) {
    const [algorithm, setAlgorithm] = useState({});
    const [pictures, setPictures] = useState([]);
    const [picturesDescription, setPicturesDescription] = useState([]);

    useEffect(() => {
        const id = props.match.params.id //takes id from url
        // const id = 'ce11d4a4-9534-4d13-862e-67a9e5a85fe4'//dummy data (bubble sort)
        async function fetchAPI() {
            try {
                const apiData = await API.graphql(graphqlOperation(getAlgorithms, { id: id }));
                console.log(apiData.data.getAlgorithms)
                setAlgorithm(apiData.data.getAlgorithms);
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
            <AlgoViewFunction data={algorithm} />
            <Animation pictures={pictures} picturesDescription={picturesDescription} />
            <AceEditor mode="javascript" theme="dracula" value={algorithm.example}
                fontSize={14} width={370} height={300} key={algorithm.id} />
        </div>
    )
}
