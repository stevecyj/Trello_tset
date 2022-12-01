import { chartDataForUsers } from '../../../data/data-charts-of-user';
import { reportApiService } from '../services/ReportApiService';

export const getServerSideProps = async context => {
    const { chartID } = context.query
    const currentChart = chartDataForUsers.filter(chart => 
        chart.chartID == chartID
    )
    const apiurl = currentChart[0]
    const { reportData: result, labels } = await reportApiService.getChart(currentChart.apiUrl,context.query);

    return {
        props: {
            result,
            labels,
            chartID,
            currentChart
        },
    };
};

export const MyChartDetails = ({ result, labels, chartID,currentChart}) => {
    console.log(currentChart[0].apiUrl)
    return (
        <div> 
        {/* <NavigationMenu /> */}
        {/* <MonthlyCreatedTasksGroupByLabel result={result} labels={labels} /> */}
        </div>
    );
};
