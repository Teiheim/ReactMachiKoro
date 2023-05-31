// activateCards.test.ts
import { getActivatedCards } from '../utils';
import { City, MachiKoroDeck, Structure } from '../types';

describe('activateCards', () => {
  let completeField: City[];
  let machiKoroCards: MachiKoroDeck;
  let dice: number;
  let activatedCards: { [color: string]: string[] };

  beforeEach(() => {
    completeField = [
      { cardName: 'Wheat Field', amount: 5 },
      { cardName: 'Ranch', amount: 3 },
      // Add more test data as needed
    ];

    machiKoroCards = {
      'Wheat Field': {
        structure: {
          cardName: 'Wheat Field',
          price: 1,
          activation: [1],
          color: 'blue',
        },
        amount: 5,
      },
      Ranch: {
        structure: {
          cardName: 'Ranch',
          price: 1,
          activation: [2],
          color: 'blue',
        },
        amount: 3,
      },
      // Add more test data as needed
    };

    dice = 2;
    activatedCards = { blue: [], green: [], red: [], purple: [] };
  });

  it('should add activated cards to the correct color array', () => {
    getActivatedCards(completeField, machiKoroCards, dice, activatedCards);
    expect(activatedCards.blue).toEqual([{
           "amount": 3,
           "cardName": "Ranch",
         }]);
    expect(activatedCards.green).toEqual([]);
    expect(activatedCards.red).toEqual([]);
    expect(activatedCards.purple).toEqual([]);
  });

  // Add more test cases as needed
});
