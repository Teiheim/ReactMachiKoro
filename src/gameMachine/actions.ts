import { assign } from 'xstate';
import { machiKoroCards } from '../cardLibrary';
import { decrementCard, removeMoneyFromPlayer } from './utils';
import {
  Structure,
  Player,
  MachiKoroDeck,
  City,
  MachiKoroGame,
} from '../types';

interface CreateGameEvent {
  data: {
    players: { playerName: string }[];
    roomName: string;
  };
}
export const createGame = assign({
  players: (_, event: CreateGameEvent): Player => {
    const generatedPlayers = [];
    event.data.players.forEach((player) =>
      generatedPlayers.push({
        playerName: player.playerName,
        id: 5,
      })
    );
  },
  //@NOTE write about this in blog
  cards: (_, event: CreateGameEvent) => {
    const newGameDeck = structuredClone(machiKoroCards);
    event.data.players.forEach(() => {
      decrementCard(newGameDeck, 'Wheat Field');
      decrementCard(newGameDeck, 'Bakery');
    });
    return newGameDeck;
  },
  playerInTurn: 0,
  cardHistory: [],
  roomName: (_, event: CreateGameEvent) => event.data.roomName,
});

export const setGameTurn = assign({
  players: (_, event) => event.data.players,
  cards: (_, event) => event.data.cards,
  playerInTurn: (_, event) => event.data.playerInTurn,
  cardHistory: (_, event) => event.data.cardHistory,
  roomName: (_, event) => event.data.roomName,
});

export const addStructureToPlayer = assign({
  cards: (
    context: MachiKoroGame,
    event: { type: string; data: { cards: { name: string; amount: number }[] } }
  ) => {
    return event.data.cards.reduce(
      (machiDeck: MachiKoroDeck, card) =>
        decrementCard(machiDeck, card.name, card.amount),
      context.cards
    );
  },
  players: (
    context: MachiKoroGame,
    event: {
      type: string;
      data: { cards: { name: string; amount: number }[]; playerNum: number };
    }
  ) => {
    const oldPlayers = context.players;
    event.data.cards.reduce(
      (players: Player[], card) =>
        removeMoneyFromPlayer(players, event.data.playerNum, card.amount),
      oldPlayers
    );
  },
});

export const executeEffects = assign({});

const getActivatedCards = (
  dice: number,
  deck: MachiKoroDeck,
  players: Player[]
) => {
  const activatedCards = { green: [], blue: [], red: [], purple: [] };
  const completeField = players.map((player) => player.city).flat();

  completeField.forEach((structure: City) => {
    const completeCardInfo: Structure = machiKoroCards[structure.cardName];
    const canActivateCard: boolean = completeCardInfo.activation.includes(dice);
    const cardColor: string = completeCardInfo.color;
    if (canActivateCard) activatedCards[cardColor].push(structure);
  });
};

const redCard = (
  cards: { amount: number; cardName: string; player: number }[],
  playerTurn: number,
  gameContext: MachiKoroGame
) => {
  const playerIncome = [0, 0, 0, 0];
  cards.forEach((card) => {
    const machiCard = machiKoroCards[card.cardName];
    console.log(machiCard);
    if (playerTurn !== card.player) {
      const playerInTurnMoney = gameContext.players[playerTurn].money;
      const totalCardIncome = machiCard.structure.income * card.amount;
      if (playerInTurnMoney < totalCardIncome) {
        playerIncome[card.player] += playerInTurnMoney;
        playerIncome[playerTurn] = 0;
      } else {
        playerIncome[card.player] += totalCardIncome;
      }
    }
  });
  return playerIncome;
};
const blueCard = (
  cards: [{ amount: number; cardName: string; player: number }],
  numPlayers: Number
) => {
  const playerIncome = [0, 0, 0, 0];
  cards.forEach((card) => {
    const machiCard = machiKoroCards[card.cardName];
    playerIncome[card.player] += machiCard.structure.income * card.amount;
  });
  return playerIncome;
};
//Take note of the Shopping mall multiplyer
const greenCard = (
  cards: [{ amount: number; cardName: string; player: number }],
  playerTurn: number
) => {
  //exclude Cheese Factory
  //exclude Furniture Factory
  //exclude Fruit and Veggie
  const playerIncome = [0, 0, 0, 0];
  cards.forEach((card) => {
    const machiCard = machiKoroCards[card.cardName];
    if (playerTurn === card.player)
      playerIncome[card.player] += machiCard.structure.income * card.amount;
  });
  return playerIncome;
};
const purpleCard = () => {};
