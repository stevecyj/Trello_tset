import axios from 'axios';
import { monthlyCreatedTasksGroupByLabelTransformer } from './../transformers/MonthlyCreatedTasksGroupByLabelTransformer';
class ReportApiService {
  async getChart(chartapi:any,query: any) {
    let params  = new URLSearchParams('')
    if ("status" in query || "label" in query || "from" in query || "to" in query)
    {
       params = new URLSearchParams(query);
    }
    
    const url = 'http://localhost:3000/api/reports/chart?' + params;
    const getCards = await axios.get(url);
    const card = getCards.data;
    console.log("####",chartapi)

    const reportData = monthlyCreatedTasksGroupByLabelTransformer.transform(card);
    const labels = monthlyCreatedTasksGroupByLabelTransformer.getLabels(card);

    return { reportData, labels };
  }
}

export const reportApiService = new ReportApiService();
