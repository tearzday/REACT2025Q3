import { dataCards } from '@/__tests__/__mocks__/MockCard';
import APICard from './card';

describe('Test API', () => {
  const mockFetch = vi.fn();
  global.fetch = mockFetch;

  test('Success fetch', async () => {
    const successGetCards = vi
      .spyOn(APICard, 'getCards')
      .mockResolvedValue(dataCards);
    const cards = await APICard.getCards({ name: 'rick', page: '1' });

    expect(successGetCards).toHaveBeenCalledWith({ name: 'rick', page: '1' });

    expect(cards).toEqual(dataCards);
    successGetCards.mockReset();
  });

  test('Error', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      json: vi.fn().mockResolvedValue('Server Error'),
    });

    await expect(APICard.getCards({})).rejects.toThrow(
      'Something went wrong, try again another time!'
    );
  });

  test('Error "There is nothing here"', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      json: vi.fn().mockResolvedValue({ error: 'There is nothing here' }),
    });

    const result = await APICard.getCards({});
    expect(result).toEqual([]);
  });
});
