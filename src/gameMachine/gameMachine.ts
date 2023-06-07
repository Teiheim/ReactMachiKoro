import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';
import { Structure, Landmark, Player } from '../types';
import { machiKoroCards } from '../cardLibrary';

export const machiMachine = createMachine({
  id: 'machiKoro',
  initial: 'gameRoom',
  context: {
    deck: machiKoroCards,
    players: [],
    playerInTurn: 0,
    cardHistory: [],
    roomName: '',
  },
  states: {
    gameRoom: {
      initial: 'enterName',
      states: {
        joinGame: {
          //Create Game Room
          //Game Room is given a name
        },
        enterName: {
          //The UI asks for a name
          on: {
            SETUP_GAME: {
              target: '#playGame',
              //actions: console.log(//save name in context)
            },
          },
        },
        otherPlayers: {
          //Connection now waits for other players to join
        },
        setBoard: {},
      },
    },
    playGame: {
      id: 'playGame',
      initial: 'rollDice',
      states: {
        rollDice: {},
        cardEffects: {},
        buyStructures: {},
        endTurn: {},
      },
    },
  },
});
