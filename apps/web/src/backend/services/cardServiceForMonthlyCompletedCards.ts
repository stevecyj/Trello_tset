import _ from 'lodash';

/**
 * Map created card with date
 *
 * @param {array} cards
 * @param {array} actions
 * @returns {array}
 */
type Card = {
  [x:string] :  string 
  updatedListName: string
}

type Action = {
  [x:string] : string
};

type List = {
  [x:string] : string
};

type GroupedCard = {
  string : Card[] | number;
};

class CardService {
  appendDetailInfo(cards: Card[], actions: Action[], lists: List[]) {
    let updatedCards = this.appendListName(cards, lists)
    
    updatedCards = this.filterCardDone(updatedCards)

    updatedCards = this.appendDoneDate(updatedCards, actions)

    return updatedCards;
  }

  appendListName(cards: Card[], lists: List[]){
    return cards.map(card => {
      const list = lists.find(
        list =>
          list.id === card.idList
      );

      return {
        ...card,
        updatedListName: list?.name,
      };
    });
  }

  filterCardDone(updatedCards: Card[]){
     updatedCards = updatedCards.filter(card => card.updatedListName === "Done")
     return updatedCards
  }

  appendDoneDate(updatedCards:Card[], actions: Action[]){
    const res = actions.filter(action =>
      action.type === "updateCard"&&
      action.data.hasOwnProperty("listAfter") &&
      action.data.listAfter.name === "Done"
    )
    
    return updatedCards.map(card =>{
      const action = res.find(action=>
        action.data.card.id == card.id
      )
    
    return{
      ...card,
      completedate:action.date
     }
    })
  }

  filterByDateRange(updatedCards: Card[], fromDate: string, toDate: string) {
    if (fromDate) {
      updatedCards = updatedCards.filter(card => card.createdDate >= fromDate);
    }

    if (toDate) {
      updatedCards = updatedCards.filter(card => card.createdDate <= toDate);
    }
    return updatedCards;
  }

  groupCardsByMonth(updatedCards: Card[]) {
    return _.groupBy(updatedCards,card => {
      const createdDate = new Date(card.completedate)
      return createdDate.toLocaleString('default', { month: 'long' });
    });
  }

  getMonthlyCompletedCardNumberMap(groupedCard : GroupedCard){
    let cardMonthNumberOfCompletedCardMap = [
      { month: 'January', CardCompleted : 0 },
      { month: 'February', CardCompleted : 0 },
      { month: 'March' , CardCompleted : 0 },
      { month: 'April' , CardCompleted : 0 },
      { month: 'May' , CardCompleted : 0 },
      { month: 'June' , CardCompleted : 0 },
      { month: 'July' , CardCompleted : 0 },
      { month: 'August' , CardCompleted : 0 },
      { month: 'September' , CardCompleted : 0 },
      { month: 'October' , CardCompleted : 0 },
      { month: 'November' , CardCompleted : 0 },
      { month: 'December' , CardCompleted : 0 },
    ]
    
    for (let card in groupedCard){
      let index_of_month = cardMonthNumberOfCompletedCardMap.map(card => card.month).indexOf(card);
      let finalcard = cardMonthNumberOfCompletedCardMap[index_of_month]
      finalcard["CardCompleted"] = groupedCard[card].length
    }
    
    return cardMonthNumberOfCompletedCardMap
  }
}

const cardService = new CardService();

export { CardService, cardService };
