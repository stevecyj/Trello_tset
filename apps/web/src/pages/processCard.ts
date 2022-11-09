import axios from 'axios'

const fetchData = () =>{
    
  return axios.get('http://localhost:3000/api/reports/chart')
  .then(res => {
    const chartData = res.data

    let final_card_for_chart = [
      {month:'January'},
      {month:'February'},
      {month:'March'},
      {month:'April'},
      {month:'May'},
      {month:'June'},
      {month:'July'},
      {month:'August'},
      {month:'September'},
      {month:'October'},
      {month:'November'},
      {month:'December'}
    ]

    for (let card_status in chartData){
      for (let month in chartData[card_status]){
          //Find index of month, to use it later when storing number of card with certain label
          let index_of_month = final_card_for_chart.map(card => card.month).indexOf(month)
          let label_number_map = chartData[card_status][month]

          for (let each_card in label_number_map){
              let card = final_card_for_chart[index_of_month]

              if (each_card in final_card_for_chart[index_of_month]){
                  card[each_card]++
              }
              else{ //if not in, create new and append
                  card[each_card] = label_number_map[each_card]
              }
          }
      }
    }
    
    return final_card_for_chart
  })
  .catch (error => {
    console.log(error);
  });
}

export default fetchData
