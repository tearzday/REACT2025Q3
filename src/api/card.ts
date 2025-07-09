class APICard {
  static async getCards(name?: string) {
    let url = 'https://rickandmortyapi.com/api/character';

    if (name) {
      url += `?name=${name}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    return data.results;
  }
}

export default APICard;
