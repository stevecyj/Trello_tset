import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { chartDataForUsers } from '../../../data/data-charts-of-user';

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

export const MonthlyCreatedTasksGroupByLabelSettings = ({ onSubmit, fetchAll, chart }) => {
  
  const [status, setStatus] = useState(chart[0].chartDetails.chartFilters.status);
  const [label, setLabel] = useState(chart[0].chartDetails.chartFilters.label);
  const [from, setFrom] = useState(chart[0].chartDetails.chartFilters.from);
  const [to, setTo] = useState(chart[0].chartDetails.chartFilters.to);
  
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      status: status,
      label:label,
      from:from,
      to:to
    });
  };

  const onFetchAll = e => {
    e.preventDefault();
    fetchAll();
  };

  const returnFilterFields = () =>{
    let filterTextFields = []
    const chartFilterKey = chart[0].chartDetails.chartFilters

    if (chartFilterKey.hasOwnProperty("status")){
      filterTextFields.push(<div><TextField label='Status' variant='filled' sx={{ mb: 2 }} value={status} onChange={e => setStatus(e.target.value)}/><br/></div>)
    }
    if (chart[0].chartDetails.chartFilters.hasOwnProperty("label")){
      filterTextFields.push(<div><TextField label='Label' variant='filled' sx={{ mb: 2 }} value={label} onChange={e => setLabel(e.target.value)}/><br/></div>)
    }
    if (chart[0].chartDetails.chartFilters.hasOwnProperty("from")){
      filterTextFields.push(<div><TextField label='From' variant='filled' type='date' sx={{ mb: 2 }} defaultValue = {from} onChange={e => setFrom(e.target.value)}/><br/></div>)
    }
    if (chart[0].chartDetails.chartFilters.hasOwnProperty("to")){
      filterTextFields.push(<div><TextField label='To' variant='filled' type='date' sx={{ mb: 2 }} value={to} onChange={e => setTo(e.target.value)}/><br/></div>)
    }

    return filterTextFields
  }

  return (
    <div>
      <div id="UserInput">
        <form onSubmit={handleSubmit}>
          {returnFilterFields()}
          <Button variant="outlined" color="success" type="submit">
            Filter Data
          </Button>
          <Button variant="contained" color="success" onClick={onFetchAll} sx={{ ml: 2 }}>
            Fetch All
          </Button>
        </form>
      </div>
    </div>
  );
};
