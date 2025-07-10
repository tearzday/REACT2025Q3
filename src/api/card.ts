const APICard = {
  baseUrl: 'https://rickandmortyapi.com/api/character',

  async getCards(name?: string) {
    let url = this.baseUrl;

    if (name) {
      url += `?name=${name}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error ?? 'Something went wrong, try again another time!'
      );
    }

    return data.results;
  },
};

export default APICard;
