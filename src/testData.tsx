import { MachiKoroGame } from "./types";

export const machiKoroGameExample: MachiKoroGame = {
  players: [
    {
      playerName: "Player 1",
      id: "player1",
      money: 0,
      city: [
        { cardName: "Wheat Field", amount: 1 },
        { cardName: "Bakery", amount: 1 },
        { cardName: "Cafe", amount: 1 },
      ],
      landmarks: new Set(),
    },
    {
      playerName: "Player 2",
      id: "player2",
      money: 0,
      city: [
        { cardName: "Wheat Field", amount: 2 },
        { cardName: "Ranch", amount: 1 },
        { cardName: "Forest", amount: 1 },
      ],
      landmarks: new Set(),
    },
    {
      playerName: "Player 3",
      id: "player3",
      money: 0,
      city: [
        { cardName: "Bakery", amount: 2 },
        { cardName: "Cafe", amount: 2 },
        { cardName: "Convenience Store", amount: 1 },
      ],
      landmarks: new Set(),
    },
    {
      playerName: "Player 4",
      id: "player4",
      money: 0,
      city: [
        { cardName: "Forest", amount: 2 },
        { cardName: "Apple Orchard", amount: 1 },
        { cardName: "Cheese Factory", amount: 1 },
      ],
      landmarks: new Set(),
    },
  ],
  cards: {
    "Wheat Field": {
      structure: {
        cardName: "Wheat Field",
        price: 1,
        activation: [1],
        description: "Get 1 coin from the bank, on anyone's turn.",
        income: 1,
        industry: "Primary",
        color: "blue",
      },
      amount: 6,
    },
    Ranch: {
      structure: {
        cardName: "Ranch",
        price: 1,
        activation: [2],
        description: "Get 1 coin from the bank, on anyone's turn.",
        income: 1,
        industry: "Primary",
        color: "blue",
      },
      amount: 6,
    },
    Forest: {
      structure: {
        cardName: "Forest",
        price: 3,
        activation: [5],
        description: "Get 1 coin from the bank, on your turn only.",
        income: 1,
        industry: "Primary",
        color: "blue",
      },
      amount: 6,
    },
    Bakery: {
      structure: {
        cardName: "Bakery",
        price: 1,
        activation: [2, 3],
        description: "Get 1 coin from the bank, on your turn only.",
        income: 1,
        industry: "Secondary",
        color: "green",
      },
      amount: 6,
    },
    Cafe: {
      structure: {
        cardName: "Cafe",
        price: 2,
        activation: [3],
        description:
          "Choose one player on your turn: they must give you 1 coin.",
        income: 1,
        industry: "Secondary",
        color: "red",
      },
      amount: 6,
    },
    "Convenience Store": {
      structure: {
        cardName: "Convenience Store",
        price: 2,
        activation: [4],
        description: "Get 3 coins from the bank, on your turn only.",
        income: 3,
        industry: "Secondary",
        color: "green",
      },
      amount: 4,
    },
    "Apple Orchard": {
      structure: {
        cardName: "Apple Orchard",
        price: 3,
        activation: [10],
        description: "Get 3 coins from the bank, on anyone's turn.",
        income: 3,
        industry: "Primary",
        color: "blue",
      },
      amount: 6,
    },
    "Cheese Factory": {
      structure: {
        cardName: "Cheese Factory",
        price: 5,
        activation: [7],
        description:
          "If you have at least 1 cow establishment, get 3 coins from the bank.",
        income: 3,
        industry: "Primary",
        color: "green",
      },
      amount: 4,
    },
  },
  playerInTurn: 0,
  cardHistory: [],
  roomName: "MachiKoro Game Room",
};
