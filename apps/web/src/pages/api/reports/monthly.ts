import { prisma } from "database";

import type { NextApiRequest, NextApiResponse } from "next";

import { trelloAdapter } from '../../../backend/adapters/trelloAdapter';
import { cardService } from '../../../backend/services/cardService';

/**
 * Users
 *
 * @description A basic API endpoint to retrieve all the users in the database
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { from, to, status, label } = req.query;
  
  const board = await trelloAdapter.getBoard();

  const { cards, actions, lists } = board;

  let updatedCards = cardService.appendDetailInfo(cards, actions, lists);

  updatedCards = this.filterCards(updatedCards, status, label, from, to);

  let groupedCardMap = cardService.groupCards(updatedCards);

  res.json(groupedCardMap);
}
