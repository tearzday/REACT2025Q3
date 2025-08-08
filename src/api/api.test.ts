import { dataCards } from '@/__tests__/__mocks__/MockCard';
import APICard from './card';

describe('Test API', () => {
  const mockFetch = vi.fn();
  global.fetch = mockFetch;

  beforeEach(() => {
    vi.resetAllMocks();
  });

  test('Success fetch', async () => {
    const successGetCards = vi
      .spyOn(APICard, 'getCards')
      .mockResolvedValue(dataCards);
    const cards = await APICard.getCards({ name: 'rick', page: 1 });

    expect(successGetCards).toHaveBeenCalledWith({ name: 'rick', page: 1 });

    expect(cards).toEqual(dataCards);
    successGetCards.mockReset();
  });

  test('Error "There is nothing here"', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      json: vi.fn().mockResolvedValue({ error: 'There is nothing here' }),
    });

    await expect(APICard.getCards({ name: 'rick', page: 1 })).rejects.toThrow(
      'There is nothing here'
    );
  });
});
