import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import omitBy from 'lodash/omitBy';
import { monthlyCreatedTasksGroupByLabelTransformer } from '../transformers/MonthlyCreatedTasksGroupByLabelTransformer';
class ReportApiService {
  async getChart(cardData: any) {
    const params = new URLSearchParams(omitBy(cardData.chartDetails.chartFilters, isEmpty));
    const url = cardData.apiUrl + params;
    const getCards = await axios.get(url);
    const card = getCards.data;

    let reportData, labels;
    if (cardData.chartID == 1) {
      reportData = monthlyCreatedTasksGroupByLabelTransformer.transform(card);
      labels = monthlyCreatedTasksGroupByLabelTransformer.getLabels(card);
    } else {
      reportData = card;
      labels = ['CardCompleted'];
    }

    return { reportData, labels };
  }
}

export const reportApiService = new ReportApiService();
