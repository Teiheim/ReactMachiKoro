// activateCards.test.ts
import { getActivatedCards, greenCard, blueCard, redCard } from '../utils';
import { City, MachiKoroDeck, Structure, MachiKoroGame } from '../types';

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
          industry: 'Primary',
          income: 1,
          color: 'blue',
        },
        amount: 5,
      },
      Ranch: {
        structure: {
          cardName: 'Ranch',
          price: 1,
          activation: [2],
          income: 1,
          industry: 'Primary',
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
    expect(activatedCards.blue).toEqual([
      {
        amount: 3,
        cardName: 'Ranch',
      },
    ]);
    expect(activatedCards.green).toEqual([]);
    expect(activatedCards.red).toEqual([]);
    expect(activatedCards.purple).toEqual([]);
  });

  // Add more test cases as needed
});
describe('Blue/Green Card Money Calculation', () => {
  const machiKoroCards: MachiKoroDeck = {
    wheat_field: {
      structure: {
        cardName: 'Wheat Field',
        price: 1,
        activation: [1],
        income: 1,
        industry: 'Primary',
        color: 'blue',
      },
      amount: 4,
    },
    bakery: {
      structure: {
        cardName: 'Bakery',
        price: 1,
        activation: [2, 3],
        income: 1,
        industry: 'Secondary',
        color: 'green',
      },
      amount: 3,
    },
    shopping_mall: {
      structure: {
        cardName: 'Shopping Mall',
        price: 10,
        activation: [],
        income: 1,
        industry: 'Major',
        color: 'green',
      },
      amount: 1,
    },
  };

  describe('blueCard', () => {
    it('calculates player income correctly for blue cards', () => {
      const cards = [
        { amount: 2, cardName: 'Wheat Field', player: 0 },
        { amount: 3, cardName: 'Wheat Field', player: 1 },
        { amount: 1, cardName: 'Wheat Field', player: 2 },
        { amount: 4, cardName: 'Wheat Field', player: 3 },
      ];
      const numPlayers = 4;

      const playerIncome = blueCard(cards, numPlayers);

      expect(playerIncome).toEqual([2, 3, 1, 4]);
    });
  });

  describe('greenCard', () => {
    it('calculates player income correctly for green cards', () => {
      const cards = [
        { amount: 2, cardName: 'Bakery', player: 0 },
        { amount: 1, cardName: 'Bakery', player: 1 },
        { amount: 3, cardName: 'Bakery', player: 2 },
        { amount: 4, cardName: 'Bakery', player: 3 },
      ];
      const playerTurn = 0;

      const playerIncome = greenCard(cards, playerTurn);

      expect(playerIncome).toEqual([2, 0, 0, 0]);
    });
  });
});

describe('Red Card Money Calculation', () => {
  const machiKoroCards: {
    [cardName: string]: { structure: Structure; amount: number };
  } = {
    'Wheat Field': {
      structure: {
        cardName: 'Wheat Field',
        price: 1,
        activation: [1],
        description: 'Produces 1 coin',
        income: 1,
        industry: 'Primary',
        color: 'blue',
      },
      amount: 4,
    },
    Bakery: {
      structure: {
        cardName: 'Bakery',
        price: 1,
        activation: [2, 3],
        description: 'Produces 1 coin for each matching dice roll',
        income: 1,
        industry: 'Secondary',
        color: 'green',
      },
      amount: 3,
    },
    Cafe: {
      structure: {
        cardName: 'Cafe',
        price: 2,
        activation: [3],
        description: 'Take 1 coin from the active player on their turn',
        income: 1,
        industry: 'Restaurant',
        color: 'red',
      },
      amount: 3,
    },
  };

  const gameContext: MachiKoroGame = {
    players: [
      {
        money: 0,
        city: [],
        landmarks: [],
      },
      {
        money: 0,
        city: [],
        landmarks: [],
      },
      {
        money: 0,
        city: [],
        landmarks: [],
      },
      {
        money: 0,
        city: [],
        landmarks: [],
      },
    ],
    cards: [],
    playerInTurn: 0,
    cardHistory: [],
    roomName: 'MachiKoro',
  };

  describe('redCard', () => {
    it('calculates player income correctly for red cards', () => {
      gameContext.players[0].money = 10; // Player 0 has 10 coins
      gameContext.players[1].money = 5; // Player 1 has 5 coins
      gameContext.players[2].money = 3; // Player 2 has 3 coins
      gameContext.players[3].money = 8; // Player 3 has 8 coins

      const cards = [
        { amount: 2, cardName: 'Cafe', player: 0 },
        { amount: 1, cardName: 'Cafe', player: 1 },
        { amount: 3, cardName: 'Cafe', player: 2 },
        { amount: 4, cardName: 'Cafe', player: 3 },
      ];
      const playerTurn = 0;

      const playerIncome = redCard(cards, playerTurn, gameContext);

      expect(playerIncome).toEqual([0, 1, 3, 4]);
    });
  });
});
