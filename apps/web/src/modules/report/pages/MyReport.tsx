import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from "next/router"
import { reportApiService } from '../services/ReportApiService';
import { MonthlyCreatedTasksGroupByLabel } from '../../chart-templates/components/MonthlyCreatedTasksGroupByLabel';

export const getServerSideProps = async(context) =>{
  const {
    reportData: result,
    labels
  } = await reportApiService.getChart(context.query);

  return{
    props:{
      result,
      labels
    }
  }
}

export const MyReport = ({ result, labels }) =>{
  const [status, setStatus] = useState('')
  const [label, setLabel] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const router = useRouter()

  const handleSubmit = (e) =>{
    e.preventDefault();
    router.replace({
      pathname:router.asPath,
      query:{
        status:status,
        /* label:label,
        from:from,
        to:to */
      }
    })
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
  }

  const fetchAll = (e) =>{
    /* e.preventDefault();
    defaulturl = 'http://localhost:3000/api/reports/chart';
    fetchData(defaulturl) */
    e.preventDefault()
    console.log(router.asPath)
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
          <Button variant='contained' color='success' onClick={fetchAll} sx={{ ml: 2 }}>Fetch All</Button>
        </form>
      </div>
      <MonthlyCreatedTasksGroupByLabel result={result} labels={labels} />
    </div>
  )
}
