import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export const MonthlyCreatedTasksGroupByLabelSettings = ({ updateFilter, chart }) => {
  
  const [status, setStatus] = useState(chart[0].chartDetails.chartFilters.status);
  const [label, setLabel] = useState(chart[0].chartDetails.chartFilters.label);
  const [from, setFrom] = useState(chart[0].chartDetails.chartFilters.from);
  const [to, setTo] = useState(chart[0].chartDetails.chartFilters.to);
  
  const updateFilterFields = e => {
    e.preventDefault();

    updateFilter({
      status: status,
      label:label,
      from:from,
      to:to
    });
  };

  const onCancel = e => {
    e.preventDefault();
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
        <form onSubmit={updateFilterFields}>
          {returnFilterFields()}
          <Button variant="outlined" color="success" type="submit">
            Update Chart
          </Button>
          <Button variant="contained" color="success" onClick={onCancel} sx={{ ml: 2 }}>
            Cancel
          </Button>
        </form>
      </div>
    </div>
  );
};
