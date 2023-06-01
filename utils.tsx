import { Structure, Player, MachiKoroDeck, City, MachiKoroCard } from './types';
import { machiKoroCards } from './cardLibrary';

export const getActivatedCards = (
  completeField,
  machiKoroCards,
  dice,
  activatedCards
) => {
  completeField.forEach((structure: City) => {
    console.log(structure);
    const completeCardInfo: Structure =
      machiKoroCards[structure.cardName].structure;
    console.log(completeCardInfo);
    const canActivateCard: boolean = completeCardInfo.activation.includes(dice);
    const cardColor: string = completeCardInfo.color;
    if (canActivateCard) activatedCards[cardColor].push(structure);
  });
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
    if (playerTurn === card.player)
      playerIncome[card.player] += machiCard.structure.income * card.amount;
  });
  return playerIncome;
};
