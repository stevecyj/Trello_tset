import axios from 'axios'
import { monthlyCreatedTasksGroupByLabelTransformer } from '../transformers/MonthlyCreatedTasksGroupByLabelTransformer'

export const GetCards = (url) =>{
  return axios.get(url)
  .then(res =>{

    const reportData = monthlyCreatedTasksGroupByLabelTransformer.transform(res.data)
    const labels = monthlyCreatedTasksGroupByLabelTransformer.getLabels(res.data)

    return {reportData,labels}
  })
}