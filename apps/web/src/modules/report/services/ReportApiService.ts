import { monthlyCreatedTasksGroupByLabelTransformer } from './../transformers/MonthlyCreatedTasksGroupByLabelTransformer';
import axios from 'axios'
class ReportApiService {
  async getChart(query: any) {
    const params = new URLSearchParams(query)
    const url = 'http://localhost:3000/api/reports/chart?'+params
    const getCards = await axios.get(url)
    const card = getCards.data;

    const reportData = monthlyCreatedTasksGroupByLabelTransformer.transform(card);

    return reportData;
  }
}


export const reportApiService = new ReportApiService();
