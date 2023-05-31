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
  cards: [{ amount: Number; cardName: String; player: Number }]
) => {
  const playerIncome = [0, 0, 0, 0];
};
const greenCard = (cards) => {};
const purpleCard = () => {};
