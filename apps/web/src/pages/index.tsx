import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import { energyConsumption as data , numberOfCard as dataOfCard } from '../data/data-vizualization';
import Result from './processCard'
import { useState, useEffect } from 'react';

const Root = props => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = props => (
  <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
);

const IndexPage = () =>{
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const fetchData = () =>{
    Result().then((cardResult) =>{
      setData(cardResult);
      setLoading(false);
    })
  }
  
  const returnChart = () =>{
    return (
      <Paper>
        <Chart
          data={data}
        >
          <ArgumentAxis />
          <ValueAxis
            max={2400}
          />
  
        <BarSeries
            name="Feature"//name in the series of stack
            valueField="Feature"//value in the object
            argumentField="month" // the name of the key that u want to group ur data
          />
          
          <BarSeries
            name="作業"
            valueField="作業"
            argumentField="month"
          />
  
          <BarSeries
            name="Productivity"
            valueField="Productivity"
            argumentField="month"
          />
  
          <BarSeries
            name="VS Code"
            valueField="VS Code"
            argumentField="month"
          />
  
          <BarSeries
            name="Video"
            valueField="Video"
            argumentField="month" 
          />
  
          <BarSeries
            name="Linux"
            valueField="Linux"
            argumentField="month" 
          />
  
          <BarSeries
            name="Reading"
            valueField="Reading"
            argumentField="month" 
          />
  
          <BarSeries
            name="Doc"
            valueField="Doc"
            argumentField="month" 
          />
  
          <BarSeries
            name="Done"
            valueField="Done"
            argumentField="month" 
          />
  
          <BarSeries
            name="Trello"
            valueField="Trello"
            argumentField="month" 
          />
  
          <BarSeries
            name="Project Management"
            valueField="Project Management"
            argumentField="month" 
          />
          
          <BarSeries
            name="Class"
            valueField="Class"
            argumentField="month" 
          />
  
          <BarSeries
            name="自學"
            valueField="自學"
            argumentField="month" 
          />
  
          <BarSeries
            name="Interview"
            valueField="Interview"
            argumentField="month" 
          />
  
          <BarSeries
            name="Testing"
            valueField="Testing"
            argumentField="month" 
          />
  
          <BarSeries
            name="CI/CD"
            valueField="CI/CD"
            argumentField="month" 
          />
  
          <BarSeries
            name="IDE"
            valueField="IDE"
            argumentField="month" 
          />
  
          <BarSeries
            name="Github"
            valueField="Github"
            argumentField="month" 
          />
  
          <BarSeries
            name="HackMD"
            valueField="Software Engineering"
            argumentField="month" 
          />
  
          <BarSeries
            name="Git"
            valueField="Git"
            argumentField="month" 
          />
  
          <BarSeries
            name="Semantic Versioning"
            valueField="Semantic Versioning"
            argumentField="month" 
          />
  
          <BarSeries
            name="Markdown"
            valueField="Markdown"
            argumentField="month" 
          />
          
          <BarSeries
          name="SSH"
          valueField="SSH"
          argumentField="month" 
        />
  
        <BarSeries
          name="Meeting"
          valueField="Meeting"
          argumentField="month" 
        />
  
        <BarSeries
          name="No Label"
          valueField="No Label"
          argumentField="month" 
        />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="Monthly Created Card - Group by Label" />
          <Stack
            stacks={[
              { 
                series:['No Label','Feature','作業','Productivity','VS Code','Video','Linux','Reading','Doc','Done','Trello','Project Management', 'Class','自學','Interview','Testing','CI/CD','IDE','Github','HackMD','Software Engineering','Git','Semantic Versioning','Markdown','SSH','Meeting']
              },
            ]}
          />
        </Chart>
      </Paper>
    );
  }

  const returnLoading = () => {
    return(
      <div>Loading...</div>
    )
  }

  useEffect( () => {
    fetchData();
}, [])

  return (
    <div id="Container">
        {loading ? returnLoading() : returnChart()}
    </div>
  )
}
export default IndexPage