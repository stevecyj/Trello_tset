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
    for (let card in groupedCard){
      groupedCard[card] = groupedCard[card].length
    }

    return groupedCard
  }
}

const cardService = new CardService();

export { CardService, cardService };
