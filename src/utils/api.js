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

  postOrder(ingredientIds) {
    return fetch(`${this._baseUrl}/orders`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingredients: ingredientIds }),
      method: 'POST',
    })
      .then((res) => this._getRes(res))
      .catch((err) => console.error('API error:', err));
  }

  getItems() {
    return fetch(`${this._baseUrl}/ingredients`).then((res) =>
      this._getRes(res),
    );
  }
}

const api = new Api(baseUrl);

export default api;
