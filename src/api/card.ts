const APICard = {
  baseUrl: 'https://rickandmortyapi.com/api/character',

  async getCards(params: { name?: string; page?: string }) {
    const { name, page } = params;
    let url = this.baseUrl;

    if (name) {
      url += `/?name=${name.trimEnd()}`;
    }

    if (page) {
      url += `&page=${page}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || 'Something went wrong, try again another time!'
      );
    }

    return data.results;
  },
};

export default APICard;
