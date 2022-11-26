import axiosClient from '../lib/axiosClient';
import trelloConfig from '../config/trello';
import debug from 'debug';
const debugLog = debug('trello:axiosAdapter');

class TrelloAdaptor {
  key: string;
  token: string;
  boardId: string;
  client: typeof axiosClient;

  constructor(options, client) {
    this.key = options.key;
    this.token = options.token;
    this.boardId = options.boardId;
    this.client = client;
  }

  async getBoard() {
    let parameters = {
      key: this.key,
      token: this.token,
      fields: 'all',
      actions: 'all',
      action_fields: 'all',
      actions_limit: '1000',
      cards: 'all',
      card_fields: 'all',
      card_attachments: 'true',
      labels: 'all',
      lists: 'all',
      list_fields: 'all',
      members: 'all',
      member_fields: 'all',
      checklists: 'all',
      checklist_fields: 'all',
      organization: 'false',
    };

    const querystring = new URLSearchParams(parameters).toString();
    const url = `https://api.trello.com/1/boards/${this.boardId}?${querystring}`;

    debugLog(`Calling trello API: ${url}`);
    return await this.client.get(url);
  }
}

const trelloAdapter = new TrelloAdaptor(
  {
    key: trelloConfig.key,
    token: trelloConfig.token,
    boardId: trelloConfig.boardId,
  },
  axiosClient,
);

export { TrelloAdaptor, trelloAdapter };
