import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { getSubcategories } from '../src/graphql/queries'
import AlgoViewFunction from './AlgoViewFunction'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './material-ui/headertemplate'
import Footer from './material-ui/footertemplate'
export default function

    DataStructurePage(props) {
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
        <div style={{ backgroundColor: 'black' }}>
            <Header />
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper>
                        <AlgoViewFunction data={dataStructure} />
                    </Paper>
                </Grid>
                {/* Image */}
                <Grid item xs={12}>
                    <Paper align='center'>
                        {/* Place Component Below This Line */}
                        {dataStructure.picture !== null &&
                            <img src={dataStructure.picture} />}
                    </Paper>
                </Grid>

                {/* Algo Example */}
                <Grid item xs={12}>
                    <Paper>
                        {/* Place Component Below This Line */}
                        <h2 align='center'>Algorithms related to {dataStructure.name}:</h2>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper>
                        {algorithms.map(algorithm => (

                            <p style={{ cursor: 'pointer' }} onClick={() => props.history.push(`/algorithms/${algorithm.id}`)} align='center' key={algorithm.id}>{algorithm.name}</p>

                        ))}
                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}




