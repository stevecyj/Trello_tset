import { useRouter } from 'next/router';
import { reportApiService } from '../services/ReportApiService';
import { MonthlyCreatedTasksGroupByLabel } from '../../chart-templates/components/MonthlyCreatedTasksGroupByLabel';
import { MonthlyCreatedTasksGroupByLabelSettings } from '../../chart-templates/components/MonthlyCreatedTasksGroupByLabelSettings';

export const getServerSideProps = async context => {
  const { reportData: result, labels } = await reportApiService.getChart(context.query);

  return {
    props: {
      result,
      labels,
    },
  };
};

export const MyReport = ({ result, labels }) => {
  const router = useRouter();

  const handleSubmit = query => {
    router.replace({
      pathname: router.asPath,
      query,
    });
    /*let url_with_filter = defaulturl + "?"
    if(status){
      url_with_filter += "status="+status+"&"
    }
    if(label){
      url_with_filter += "label="+label+"&"
    }
    if(from){
      url_with_filter += "from="+from+"&"
    }
    if(to){
      url_with_filter += "to="+to
    }

    fetchData(url_with_filter) */
  };

  const fetchAll = () => {
    /*
    defaulturl = 'http://localhost:3000/api/reports/chart';
    fetchData(defaulturl) */
    console.log(router.asPath);
  };

  return (
    <div>
      <MonthlyCreatedTasksGroupByLabelSettings onSubmit={handleSubmit} fetchAll={fetchAll} />
      <MonthlyCreatedTasksGroupByLabel result={result} labels={labels} />
    </div>
  );
};
