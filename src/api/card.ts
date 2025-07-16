const APICard = {
  baseUrl: 'https://rickandmortyapi.com/api/character',

  async getCards(params: { name?: string; page?: string }) {
    const { name, page } = params;
    let url = this.baseUrl;

    if (name) {
      url += `/?name=${name}`;
    }

    if (page) {
      url += `&page=${page}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      if (data.error === 'There is nothing here') return [];

      throw new Error('Something went wrong, try again another time!');
    }

    return data.results;
  },
};

export default APICard;
