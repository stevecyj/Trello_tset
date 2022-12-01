import { chartDataForUsers } from '../../../data/data-charts-of-user';
import { MonthlyCreatedTasksGroupByLabel } from '../../chart-templates/components/MonthlyCreatedTasksGroupByLabel';
import { NavigationMenu } from '../../chart-templates/components/NavigationMenu';
import { reportApiService } from '../services/ReportApiService';

export const getServerSideProps = async context => {
    const { chartID } = context.query
    const chart = chartDataForUsers.filter(eachchart => 
        eachchart.chartID == chartID
    )
    const { reportData: result, labels } = await reportApiService.getChart(chart[0].apiUrl, context.query);

    return {
        props: {
            result,
            labels,
            chart
        },
    };
};

export const MyChartDetails = ({result,labels,chart}) => {
    return (
        <div> 
        <NavigationMenu />
        <MonthlyCreatedTasksGroupByLabel result={result} labels={labels} chartinfo={chart} />
        </div>
    );
};
