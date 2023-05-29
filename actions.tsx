import { assign } from 'xstate';
import { machiKoroDeckList } from './cardLibrary';

export const startGame = assign({
  players: (_, event) => event.players,
});

export const executeEffects = assign({});

const getActivatedCards = (dice, deck, players) => {
  players.reduce((activationList, player, []) => {
    player.forEach((structure) =>
      activationList.push([structure, player.playerID])
    );
  });
};
const greenCard = () => {};
const redCard = () => {};
const blueCard = () => {};
const purpleCard = () => {};
