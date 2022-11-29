import { AgChartsReact } from 'ag-charts-react';
import { useEffect, useState } from 'react';


export const MonthlyCreatedTasksGroupByLabel = ({ result, labels }) => {
  const [loading, setLoading] = useState(true);
  const [options, setOption] = useState(null);

  useEffect(() => {
    setDataForChart(result);
  }, [result]);

  const setDataForChart = result => {
    const series = labels.map(label => {
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
        text: 'Monthly Created Card',
      },
      subtitle: {
        text: 'Group by Label',
      },
      data: result,
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
      legend: {
        position: 'bottom',
      },
    });

    setLoading(false);
  };

  return (
    <div>
      <div id="Container">
        {loading ? <div>Loading...</div> : <AgChartsReact options={options} />}
      </div>
    </div>
  );
};
