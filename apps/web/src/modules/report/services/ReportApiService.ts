import axios from 'axios';
import { monthlyCreatedTasksGroupByLabelTransformer } from '../transformers/MonthlyCreatedTasksGroupByLabelTransformer';
class ReportApiService {
  async getChart(chartapi:any,query: any) {
    let params
    if ("status" in query || "label" in query || "from" in query || "to" in query)
    {
      params = new URLSearchParams(query);
    }
    
    const url = chartapi + params;
    const getCards = await axios.get(url);
    const card = getCards.data;

    const {chartID} = query
    let reportData , labels
    if (chartID == 1){
        reportData = monthlyCreatedTasksGroupByLabelTransformer.transform(card);
        labels = monthlyCreatedTasksGroupByLabelTransformer.getLabels(card); 
    }
    else{
      reportData = card
      labels = ["CardCompleted"]
    }
    
    return {reportData,labels}
  }
}

export const reportApiService = new ReportApiService();
