/* const fetchData = async () =>{
  const res = await fetch('/api/reports/chart');
  const restructredCard = await res.json();
  //let newCard = cardService.restructureCardForChart(restructredCard);
  return (
    restructredCard
  );
} */
import axios from 'axios'
import { useEffect, useState } from 'react'

/* const Result = () =>{
  const [data, setData] = useState({})

  const fetchData = () =>{
  
    //const response = await axios.get('http://localhost:3000/api/reports/chart');
    //return response
    axios.get('http://localhost:3000/api/reports/chart',{})
    .then(res => {
      setData(res.data)
      console.log(data)
      return res.data
    })
    .catch (error => {
      console.log(error);
    });
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  return(
    data
  );
} */

const fetchData = async() =>{

  const [data, setData] = useState({})
  
  /* const response = await axios.get('http://localhost:3000/api/reports/chart');
  return response.data */
  axios.get('http://localhost:3000/api/reports/chart')
  .then(res => {
    console.log(res.data)
    setData(res.data)
    //return res.data
  })
  .catch (error => {
    console.log(error);
  });

  return(
    data
  );
}


export default fetchData
//export default Result

/* const [data, setData] = useState(0)

const fetchData = () =>{
  fetch('/api/reports/chart')
  .then(res => res.json())
  .then(card =>{
    //console.log('start card then')
    setData(data)
    return card
  })
} 

useEffect( () => {
  fetchData();
}, [setData]) */

//export default data
  
/* console.log("#####",card)
export default card */

/*import { useEffect, useState } from "react";

 const processCard = () =>{

  //GET CHART DATA
  const [chart_data, setChartData] = useState(null);

  const fetchData = () =>{
    fetch('/api/reports/chart')
    .then(res => {return res.json();})
    .then(fetchresult => {
      console.log(JSON.stringify(fetchresult))
      setChartData(JSON.stringify(fetchresult))
      return fetchresult
    })
    .catch(err => console.log(err))
  }

  let data = fetchData()
  console.log(data)
  
  useEffect(() => {
    fetchData();
  },[])

  return(
    "hi"
  );

}

export default processCard */
