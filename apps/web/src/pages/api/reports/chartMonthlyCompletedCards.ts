import type { NextApiRequest, NextApiResponse } from 'next';

import { trelloAdapter } from '../../../backend/adapters/trelloAdapter';
import { cardService } from '../../../backend/services/cardServiceForMonthlyCompletedCards';

/**
 * Monthly report
 *
 * @description To return monthly completed cards
 */

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const generateReport = async () => {
    const { from, to} = req.query;

    const board = await trelloAdapter.getBoard();

    const { cards, actions, lists } = board;

    let updatedCards = cardService.appendDetailInfo(cards, actions, lists);

    updatedCards = filterCards(updatedCards, from, to);

    let groupedCardMap = cardService.groupCardsByMonth(updatedCards);

    groupedCardMap = cardService.getMonthlyCompletedCardNumberMap(groupedCardMap);
    
    return res.status(200).json(
      groupedCardMap
    );
  };

  const filterCards = (updatedCards, from, to) => {
    updatedCards = cardService.filterByDateRange(updatedCards, from, to);

    return updatedCards;
  };

  await generateReport();
}
