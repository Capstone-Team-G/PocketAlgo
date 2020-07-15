import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { getAlgorithms } from '../src/graphql/queries'
import AlgoViewFunction from './AlgoViewFunction';
import AceEditor from 'react-ace';
import '../node_modules/ace-builds/src-noconflict/mode-javascript'
import '../node_modules/ace-builds/src-noconflict/theme-dracula'
import Animation from './Animation'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './material-ui/headertemplate'
import Footer from './material-ui/footertemplate'

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
                // console.log(apiData.data.getAlgorithms)x
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
        <div style={{ backgroundColor: 'black' }}>
            <Header />
            <Grid container spacing={3}>

                <Grid>
                    <Paper align='center' >
                        <AlgoViewFunction data={algorithm} />
                    </Paper>
                </Grid>
                {/* Animation */}
                <Grid item xs={12}>
                    <Paper align='center'>
                        <Animation pictures={pictures} picturesDescription={picturesDescription} />
                    </Paper>
                </Grid>
                {/* Code Example */}
                <Grid item xs={12}>
                    <Paper align='center'>
                        <AceEditor mode="javascript" theme="dracula" value={algorithm.example}
                            fontSize={14} key={algorithm.id} />
                    </Paper>
                </Grid>

            </Grid>
            <Footer />
        </div>
    )
}
