import axios from 'axios';
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

    /* const reportData = monthlyCreatedTasksGroupByLabelTransformer.transform(card);
    const labels = monthlyCreatedTasksGroupByLabelTransformer.getLabels(card); */

    //return { reportData, labels };
    return card
  }
}

export const reportApiService = new ReportApiService();
