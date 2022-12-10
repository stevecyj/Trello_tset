import * as fs from "fs";
import Router from 'next/router';
import path from 'path';
import { MonthlyCreatedTasksGroupByLabelSettings } from "../../chart-templates/components/MonthlyCreatedTasksGroupByLabelSettings";

export const getServerSideProps = context =>{
  const { chartID } = context.query
  const charts_data = fs.readFileSync(path.join(process.cwd(), 'src','data', `chart-data.json`), 'utf-8')
  const charts_data_in_json =JSON.parse(charts_data)
  const current_chart = charts_data_in_json["chart"].filter(eachchart => 
    eachchart.chartID == chartID
  )

  return{
    props:{
      charts_data_in_json,
      current_chart
    }
  }
}

const updateFilter = async (query, chart, allchart) =>{

  const cid = chart["chartID"]
  Router.push({
    pathname: `../${cid}`
  })
}

export const MyChartFilter = ({charts_data_in_json, current_chart}) =>{

    return (
        <MonthlyCreatedTasksGroupByLabelSettings updateFilter={updateFilter} chart={current_chart} allchart= {charts_data_in_json}/>
    )
}