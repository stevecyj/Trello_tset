import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const MonthlyCreatedTasksGroupByLabelSettings = ({ onSubmit, fetchAll }) =>{
  const [status, setStatus] = useState('')
  const [label, setLabel] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();

    onSubmit({
      status:status,
      /* label:label,
      from:from,
      to:to */
    });
  }

  const onFetchAll = (e) =>{
    e.preventDefault();

    fetchAll();
  }

  return(
    <div>
      <div id="UserInput">
        <form onSubmit={handleSubmit}>
          <TextField
          label="Status"
          variant="filled"
          sx={{ mb: 2 }}
          value={status}
          onChange={e => setStatus(e.target.value)}
          /><br />

          <TextField
            label="Label"
            variant="filled"
            sx={{ mb: 2 }}
            value={label}
            onChange={e => setLabel(e.target.value)}
          /><br />

          <TextField
            label="From"
            variant="filled"
            type='date'
            sx={{ mb: 2 }}
            value={from}
            onChange={e => setFrom(e.target.value)}
          /><br />

          <TextField
            label="To"
            variant="filled"
            type='date'
            sx={{ mb: 2 }}
            value={to}
            onChange={e => setTo(e.target.value)}
          /><br />

          <Button variant='outlined' color='success' type='submit'>Filter Data</Button>
          <Button variant='contained' color='success' onClick={onFetchAll} sx={{ ml: 2 }}>Fetch All</Button>
        </form>
      </div>
    </div>
  )
}
