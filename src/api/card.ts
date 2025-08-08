import type { APIData, GetCards } from '@/types';

const APICard = {
  baseUrl: 'https://rickandmortyapi.com/api/character/',

  async getCards(params: GetCards) {
    const { name, page } = params;
    let url = `${this.baseUrl}?page=${page}`;

    if (name) {
      url += `&name=${name}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    const result: APIData = {
      total: data.info.pages,
      cards: data.results,
    };

    return result;
  },

  async getCardInfo(id: string) {
    const url = this.baseUrl + id;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    return data;
  },
};

export default APICard;
