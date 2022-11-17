import { AgChartsReact } from 'ag-charts-react';
import { useState, useEffect } from 'react';
import {GetCards} from '../../report/services/ReportApiService'

type final_card = {
  [key:string] : string | number
}

export const MonthlyCreatedTasksGroupByLabel = () =>{
  const [loading, setLoading] = useState(true)

  const [options, setOption] = useState(null)

  let defaulturl = 'http://localhost:3000/api/reports/chart'

  const fetchData = async(url_to_fetch : string) =>{
      setLoading(true);
      const {reportData, labels} = await GetCards(url_to_fetch)
      setDataForChart(reportData, labels)
  }

  const setDataForChart =(card: final_card[], labels: String[]) => {
    const series = labels.map((label) => {
      return {
        type: 'column',
        xKey: 'month',
        yKey: label,
        yName: label,
        stacked: true,
      };
    });
    
    setOption({
      title: {
        text: "Monthly Created Card",
      },
      subtitle: {
        text: 'Group by Label',
      },
      data: card,
      series,
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

    setLoading(false)
  }
  
    useEffect( () => {
      fetchData(defaulturl);
  }, [])

  return (
    <div>
      <div id="Container">
        {loading ? (
          <div>Loading...</div>
        ):(
          <AgChartsReact options={options} />
        )}
      </div>
    </div>
  )
}
