import {
  Structure,
  Player,
  MachiKoroDeck,
  City,
  MachiKoroCard,
  MachiKoroGame,
} from '../types';
import { machiKoroCards } from '../cardLibrary';

export const createPlayers = (players: { name: string; id: string }[]) => {
  const machiPlayers = [];
  players.forEach((player: { name: string; id: string }) => {
    machiPlayers.push({
      playerName: player.name,
      id: player.id,
      money: 3,
      city: [
        { cardName: 'Wheat Field', amount: 1 },
        { cardName: 'Bakery', amount: 1 },
      ],
      landmarks: new Set(),
    });
  });
  return machiPlayers;
};

export const decrementCard = (
  machiDeck: MachiKoroDeck,
  cardName,
  newAmount = 1
): MachiKoroDeck => {
  return {
    ...machiDeck,
    [cardName]: {
      ...machiDeck[cardName],
      amount: machiDeck[cardName].amount - newAmount,
    },
  };
};

export const addCardToPlayer = (
  players: Player[],
  playerNum: number,
  card: string,
  amount = 1
): Player[] => {
  const newPlayers = [...players];
  newPlayers[playerNum].city?.[card]
    ? (newPlayers[playerNum].city[card].amount += amount)
    : newPlayers[playerNum].city.push({
        cardName: card,
        amount: amount,
      });
  return newPlayers;
};

export const removeMoneyFromPlayer = (
  players: Player[],
  playerNum,
  amount = 1
) => {
  const newPlayerMoney = players[playerNum].money - amount;
  return newPlayerMoney > 0 ? newPlayerMoney : 0;
};

export const getPlayerMoney = (machiGame: MachiKoroGame, playerNum) => {
  return machiGame.players[playerNum].money;
};

export const areCardsLeftToBuild = (machiGame: MachiKoroGame, card: string) => {
  return machiGame.cards[card].amount > 0;
};

export const purchaseLandmark = () => {};

export const getActivatedCards = (
  completeField,
  machiKoroCards,
  dice,
  activatedCards
) => {
  completeField.forEach((structure: City) => {
    const completeCardInfo: Structure =
      machiKoroCards[structure.cardName].structure;
    const canActivateCard: boolean = completeCardInfo.activation.includes(dice);
    const cardColor: string = completeCardInfo.color;
    if (canActivateCard) activatedCards[cardColor].push(structure);
  });
};

export const redCard = (
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
export const blueCard = (
  cards: { amount: number; cardName: string; player: number }[],
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
export const greenCard = (
  cards: { amount: number; cardName: string; player: number }[],
  playerTurn: number
) => {
  //exclude Cheese Factory
  //exclude Furniture Factory
  //exclude Fruit and Veggie
  const playerIncome = [0, 0, 0, 0];
  cards.forEach((card) => {
    const machiCard = machiKoroCards[card.cardName];
    console.log(machiCard);
    if (playerTurn === card.player) {
      playerIncome[card.player] += machiCard.structure.income * card.amount;
    }
  });
  return playerIncome;
};
