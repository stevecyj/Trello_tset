import { AgChartsReact } from 'ag-charts-react';
import { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export const MonthlyCreatedTasksGroupByLabel = ({ result, labels }) => {
  const [loading, setLoading] = useState(true);
  const [options, setOption] = useState(null);

  const [status, setStatus] = useState('');
  const [label, setLabel] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const router = useRouter();

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
        //normalizedTo: 100,
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
