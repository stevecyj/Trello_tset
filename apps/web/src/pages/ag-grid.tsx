import { AgChartsReact } from 'ag-charts-react';
import { useState, useEffect } from 'react';
import Result from './processCard'

type final_card = {
  [key:string] : string | number
}

const AgGrid = () =>{
  const [loading, setLoading] = useState(true)

  const [options, setOption] = useState(null)

  let defaulturl = 'http://localhost:3000/api/reports/chart'

  const fetchData = (url_to_fetch : string) =>{
      setLoading(true);
      Result(url_to_fetch).then((cardResult) =>{
        setDataForChart(cardResult);
        setLoading(false);
      })
  }

  const setDataForChart =(card : void | final_card[]) => {
    setOption({
      title: {
        text: "Monthly Created Card",
      },
      subtitle: {
        text: 'Group by Label',
      },
      data: card,
      series: [
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Feature',
          yName: 'Feature',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: '作業',
          yName: '作業',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Productivity',
          yName: 'Productivity',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'VS Code',
          yName: 'VS Code',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Video',
          yName: 'Video',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Linux',
          yName: 'Linux',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Reading',
          yName: 'Reading',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Doc',
          yName: 'Doc',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Done',
          yName: 'Done',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Trello',
          yName: 'Trello',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Project Management',
          yName: 'Project Management',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Class',
          yName: 'Class',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: '自學',
          yName: '自學',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Interview',
          yName: 'Interview',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Testing',
          yName: 'Testing',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'CI/CD',
          yName: 'CI/CD',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'IDE',
          yName: 'IDE',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Github',
          yName: 'Github',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'HackMD',
          yName: 'HackMD',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Git',
          yName: 'Git',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Semantic Versioning',
          yName: 'Semantic Versioning',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Markdown',
          yName: 'Markdown',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'SSH',
          yName: 'SSH',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'Meeting',
          yName: 'Meeting',
          //normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'month',
          yKey: 'No Label',
          yName: 'No Label',
          //normalizedTo: 100,
          stacked: true,
        },
      ],
      axes: [
        {
          type: 'number',
          position: 'left',
        },
        {
          type: 'category',
          position: 'bottom',
        },
      ],
    })
  }

  const returnChart = () =>{
    return <AgChartsReact options={options} />
  }

  const returnLoading = () => {
      return(
        <div>Loading...</div>
      )
    }

    useEffect( () => {
      fetchData(defaulturl);
  }, [])

  return (
    <div>
      <div id="Container">
        {loading ? returnLoading() : returnChart()}
      </div>
    </div>
  )
}
export default AgGrid