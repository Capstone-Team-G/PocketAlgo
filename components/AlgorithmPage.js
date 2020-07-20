import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { getAlgorithms } from '../src/graphql/queries'
import AlgoViewFunction from './AlgoViewFunction';
import AceEditor from 'react-ace';
import '../node_modules/ace-builds/src-noconflict/mode-javascript'
import '../node_modules/ace-builds/src-noconflict/theme-dracula'
import Animation from './Animation'
import Footer from './material-ui/footertemplate'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link'
import Toolbar from '@material-ui/core/Toolbar';
import Header from './material-ui/headertemplate';
import MobileHeader from './material-ui/mobileHeaderTemp'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

export default function AlgorithmPage(props) {
    const [algorithm, setAlgorithm] = useState({});
    const [pictures, setPictures] = useState([]);
    const [picturesDescription, setPicturesDescription] = useState([]);

    useEffect(() => {
        const id = props.match.params.id //takes id from url
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
        <div style={{ backgroundColor: 'black' }}>
            <MobileView>
                <MobileHeader />
            </MobileView>

            <AlgoViewFunction data={algorithm} />
            <Grid item xs={12} align='center'>
                <Paper>
                    <Animation pictures={pictures} picturesDescription={picturesDescription} />
                </Paper>
            </Grid>
            <Grid item xs={12} align='center'>
                <Paper>
                    <AceEditor mode="javascript" theme="dracula" value={algorithm.example}
                        fontSize={14} key={algorithm.id} />
                </Paper>
            </Grid>
            <Footer />
        </div>
    )
}
