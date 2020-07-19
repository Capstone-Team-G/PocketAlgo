import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { API, graphqlOperation } from 'aws-amplify'
import { getSubcategories } from '../src/graphql/queries'
import AlgoViewFunction from './AlgoViewFunction'
import Paper from '@material-ui/core/Paper';
import Footer from './material-ui/footertemplate'
import MobileHeader from './material-ui/mobileHeaderTemp'
import logo4 from '../public/img/logo4.png'
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
        <div style={{backgroundColor: 'black'}}>
           <MobileHeader />

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
            <div>
            {dataStructure.picture !== null &&
                <img src={dataStructure.picture} style={{ width: 425}}/>}
                </div>
            </Paper>
            </Grid>

            {/* Algo Example */}
            <Grid item xs={12}>
            <Paper>
            {/* Place Component Below This Line */}
            <h3 align='center' style={{fontFamily: 'copperplate', align: 'center' , paddingLeft: 20 , paddingRight: 20}}> Algorithms related to {dataStructure.name} <span style={{color: 'gold', fontFamily: 'true north' , fontSize: '20px'}}> = <img align='center' src='https://media.istockphoto.com/vectors/cartoon-of-businessman-holding-arrow-sign-pointing-down-vector-id926829172?k=6&m=926829172&s=612x612&w=0&h=DZFHTii7JE8zqJJMNWbcV1nhHaaOVvmcQ4JpoFS1dLA=' height='80px' width='80px'></img> </span> </h3>
            </Paper>
            </Grid>

            <Grid item xs={12}>
            <Paper>
            {algorithms.map(algorithm => (

            <p onClick={() => props.history.push(`/algorithms/${algorithm.id}`)} align='center' key={algorithm.id} style={{ fontFamily: 'patronum' , fontWeight: 'bold', fontSize: 25}}> <span style={{color: 'gold'}}> / </span> {algorithm.name} <span style={{color: 'gold'}}> \ </span> </p>

            ))}
             </Paper>
            </Grid>
            </Grid>
            <Footer />
        </div>
    )
}




