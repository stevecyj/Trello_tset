import axios from 'axios';
import debug from 'debug';
const debugLog = debug('trello:axios');
const errorLog = debug('trello:axios:error');

class AxiosClient {
  async get(url) {
    try {
      debugLog(`url: ${url}`);

      const response = await axios.get(url);
      debugLog(`statusCode: ${response.status}`);

      return response.data;
    } catch (error) {
      errorLog('Request error', error);

      throw error;
    }
  }
}

export default new AxiosClient();
