import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listAlgorithmss, getSubcategories, listSubcategoriess } from '../src/graphql/queries'
import AlgoViewFunction from './AlgoViewFunction';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import AceEditor from 'react-ace';
import '../node_modules/ace-builds/src-noconflict/mode-javascript'
import '../node_modules/ace-builds/src-noconflict/theme-dracula'

export default function AlgorithmPage(props) {
    const [subCategory, setSubCategory] = useState([]);
    const [algorithms, setAlgorithms] = useState([]);

    useEffect(() => {
        const id = props.match.params.id //takes id from url
        // const id = 'ecfc3985-c704-4511-9474-03f6ff7404d3'//dummy data (bubble sort)
        async function fetchAPI() {
            try {
                const apiData = await API.graphql(graphqlOperation(getSubcategories, { id: id }));
                setAlgorithms(apiData.data.getSubcategories.algorithms.items);
                setSubCategory(apiData.data.getSubcategories);
            } catch (err) {
                console.log('cannot fetch algo by id: ', id, err);
            }
        }
        fetchAPI();

    }, [])

    const data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 }, //graphic data
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },];
  
    return (
        <div>
            <AlgoViewFunction algo={subCategory} />
            <LineChart width={300} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
            {algorithms.map(algo=>( 
                <AceEditor mode="javascript" theme="dracula" value={algo.example}
                fontSize={14} width={370} height={300} key={algo.id}/>
            ))}
        </div>
    )
}
