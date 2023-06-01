import { assign } from 'xstate';
import { machiKoroCards } from './cardLibrary';
import { Structure, Player, MachiKoroDeck, City } from './types';

export const startGame = assign({
  //  players: (_, event) => event.players,
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

const redCard = () => {};
const blueCard = (
  cards: [{ amount: number; cardName: string; player: number }],
  numPlayers: Number
) => {
  const playerIncome = [0, 0, 0, 0];
  cards.forEach((card) => {
    const machiCard = machiKoroCards[card.cardName];
    playerIncome[card.player] += machiCard.structure.income * card.amount;
  });
};
//Take note of the Shopping mall multiplyer
const greenCard = (cards) => {
  //exclude Cheese Factory
  //exclude Furniture Factory
  //exclude Fruit and Veggie
};
const purpleCard = () => {};
