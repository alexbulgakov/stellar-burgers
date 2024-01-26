import { baseUrl } from './constants';

class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _getRes(res) {
    if (!res.ok) {
      throw new Error('Download error');
    }
    return res.json();
  }

  getItems() {
    return fetch(this._baseUrl).then((res) => this._getRes(res));
  }
}

const api = new Api(baseUrl);

export default api;
