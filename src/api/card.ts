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
      const errorMessage =
        data.error === 'There is nothing here'
          ? 'No results'
          : 'Something went wrong, try again another time!';
      throw new Error(errorMessage);
    }

    return data.results;
  },
};

export default APICard;
