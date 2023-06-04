import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';
import { Structure, Landmark, Player } from '../types';
import { machiKoroCards } from '../cardLibrary';

export const machiMachine = createMachine({
  id: 'machiKoro',
  initial: 'gameRoom.entername',
  context: {
    deck: machiKoroCards,
    players: [],
    playerInTurn: 0,
    cardHistory: [],
    roomName: '',
  },
  states: {
    gameRoom: {
      states: {
        joinGame: {
          //Create Game Room
          //Game Room is given a name
        },
        enterName: {
          //The UI asks for a name
          on: {
            SETUP_GAME: {
              target: 'playGame.setBoard',
              //actions: console.log(//save name in context)
            },
          },
        },
        otherPlayers: {
          //Connection now waits for other players to join
        },
        setBoard: {}
      },
    },
    playGame: {
      states: {
        rollDice: {},
        cardEffects: {},
        buyStructures: {},
        endTurn: {},
      },
    },
  },
});
