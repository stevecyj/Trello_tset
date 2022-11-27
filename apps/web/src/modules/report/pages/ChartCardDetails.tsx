import { MonthlyCreatedTasksGroupByLabel } from '../../chart-templates/components/MonthlyCreatedTasksGroupByLabel';
import { NavigationMenu } from '../../chart-templates/components/NavigationMenu';
import { reportApiService } from '../services/ReportApiService';

export const getServerSideProps = async context => {
  const { reportData: result, labels } = await reportApiService.getChart(context.query);

  return {
    props: {
      result,
      labels,
    },
  };
};

export const ChartCardDetails = ({ result, labels }) => {
  return (
    <div>
      <NavigationMenu />
      <MonthlyCreatedTasksGroupByLabel result={result} labels={labels} />
    </div>
  );
};
