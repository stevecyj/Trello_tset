import { MonthlyCreatedTasksGroupByLabel } from '../../chart-templates/components/MonthlyCreatedTasksGroupByLabel';
import { NavigationMenu } from '../../chart-templates/components/NavigationMenu';
import { reportApiService } from '../services/ReportApiService';
//import { MonthlyCreatedTasksGroupByLabelSettings } from '../../chart-templates/components/MonthlyCreatedTasksGroupByLabelSettings';

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
      {/* <MonthlyCreatedTasksGroupByLabelSettings onSubmit={handleSubmit} /> */}
      <NavigationMenu />
      <MonthlyCreatedTasksGroupByLabel result={result} labels={labels} />
    </div>
  );
};
