import { chartDataForUsers } from '../../../data/data-charts-of-user';
import { MonthlyCreatedTasksGroupByLabelSettings } from "../../chart-templates/components/MonthlyCreatedTasksGroupByLabelSettings";

export const getServerSideProps = async context =>{
  const { chartID } = context.query
  const chart = chartDataForUsers.filter(eachchart => 
    eachchart.chartID == chartID
  )

  return{
    props:{
      chart
    }
  }
}

const updateFilter = (query) =>{
    for (const data in query){
        console.log(query[data])
    }
}

export const MyChartFilter = ({chart}) =>{

    return (
        <MonthlyCreatedTasksGroupByLabelSettings updateFilter={updateFilter} chart={chart}/>
    )
}