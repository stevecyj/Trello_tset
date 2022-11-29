import { chartDataForUsers } from '../../../data/data-charts-of-user';
import { NavigationMenu } from '../../chart-templates/components/NavigationMenu';
import { reportApiService } from '../services/ReportApiService';

export const getServerSideProps = async context => {
    const { chartID } = context.query
    const chart = chartDataForUsers.filter(eachchart => 
        eachchart.chartID == chartID
    )
    //const { reportData: result, labels } = await reportApiService.getChart(chart[0].apiUrl, context.query);
    const result = await reportApiService.getChart(chart[0].apiUrl, context.query);

    return {
        props: {
            result,
            //labels
        },
    };
};

export const MyChartDetails = ({ result}) => {
    console.log(result)
    return (
        <div> 
        <NavigationMenu />
        {/* <MonthlyCreatedTasksGroupByLabel result={result} labels={labels} /> */}
        </div>
    );
};
