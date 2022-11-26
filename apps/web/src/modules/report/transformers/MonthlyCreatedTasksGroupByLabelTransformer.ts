import _ from 'lodash';

class MonthlyCreatedTasksGroupByLabelTransformer {
  public transform(raw) {
    return this.processCard(raw);
  }

  public getLabels(raw): string[] {
    const level1 = _.transform(
      raw,
      function (result, value, key) {
        _.merge(result, value);
      },
      {},
    );

    const level2 = _.transform(
      level1,
      function (result, value, key) {
        _.merge(result, value);
      },
      {},
    );

    const labels = Object.keys(level2);

    return labels;
  }

  private processCard(card) {
    const labels = this.getLabels(card);

    const restructureFinalCard = final_card => {
      return final_card.map(item => {
        labels.forEach(label => (item[label] = 0));

        return item;
      });
    };

    let final_card_for_chart = [
      { month: 'January' },
      { month: 'February' },
      { month: 'March' },
      { month: 'April' },
      { month: 'May' },
      { month: 'June' },
      { month: 'July' },
      { month: 'August' },
      { month: 'September' },
      { month: 'October' },
      { month: 'November' },
      { month: 'December' },
    ];

    final_card_for_chart = restructureFinalCard(final_card_for_chart);

    for (let card_status in card) {
      for (let month in card[card_status]) {
        //Find index of month, to use it later when storing number of card with certain label
        let index_of_month = final_card_for_chart.map(card => card.month).indexOf(month);
        let label_number_map = card[card_status][month];

        for (let each_card in label_number_map) {
          let card = final_card_for_chart[index_of_month];

          if (each_card in final_card_for_chart[index_of_month]) {
            card[each_card]++;
          } else {
            //if not in, create new and append
            card[each_card] = label_number_map[each_card];
          }
        }
      }
    }

    return final_card_for_chart;
  }
}

/*
Data example

{
  "Backlog": {
    "October": { "No Label": 1, "Feature": 1 },
    "July": { "No Label": 2 },
    "April": { "No Label": 1 },
    "June": { "No Label": 6 },
    "May": { "No Label": 6 },
    "August": { "No Label": 2 },
    "February": { "No Label": 1 }
  },
  "Todo": { "November": { "Feature": 2 } },
  "In Progress": {
    "October": { "Feature": 1, "Frontend": 1, "Backend": 1 },
    "November": { "作業": 2 },
    "June": { "No Label": 2 }
  },
  "Done": {
    "September": { "No Label": 2 },
    "June": {
      "No Label": 5,
      "作業": 4,
      "Productivity": 1,
      "VS Code": 1,
      "Video": 1
    },
    "April": { "No Label": 2, "作業": 3 },
    "August": { "No Label": 4 },
    "May": {
      "No Label": 7,
      "Linux": 2,
      "作業": 3,
      "Reading": 1,
      "Doc": 1,
      "Done": 1,
      "Trello": 1,
      "Project Management": 1,
      "Productivity": 2
    },
    "July": { "No Label": 3 },
    "December": { "No Label": 1 }
  },
  "Classes": {
    "June": {
      "Productivity": 1,
      "VS Code": 1,
      "Class": 3,
      "自學": 1,
      "Video": 3
    },
    "August": { "Trello": 1, "Video": 4, "Class": 5 },
    "July": { "Class": 1, "Video": 2 },
    "May": {
      "Interview": 1,
      "Class": 4,
      "Testing": 1,
      "CI/CD": 1,
      "IDE": 1,
      "Github": 2,
      "Video": 4,
      "HackMD": 1,
      "Software Engineering": 1,
      "Git": 2,
      "Semantic Versioning": 1,
      "Markdown": 1,
      "SSH": 1,
      "Linux": 1
    }
  },
  "Closed": {
    "November": { "No Label": 1 },
    "October": { "No Label": 1, "作業": 1 },
    "April": { "Meeting": 1 }
  },
  "General Info": { "June": { "No Label": 2 }, "April": { "Doc": 1 } },
  "Templates": { "April": { "Feature": 1 } }
}

*/

export const monthlyCreatedTasksGroupByLabelTransformer =
  new MonthlyCreatedTasksGroupByLabelTransformer();
