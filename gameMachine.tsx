import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';
import { Structure, Landmark, Player } from './types';
import { machiKoroCards } from './cardLibrary';

const machiMachine = createMachine({
  id: 'machiKoro',
  initial: 'gameRoom.joinGame',
  context: {
    deck: machiKoroCards,
    players: [],
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
        },
        otherPlayers: {
          //Connection now waits for other players to join
        },
      },
    },
    playGame: {
      states: {
        setBoard: {},
        rollDice: {},
        cardEffects: {},
        buyStructures: {},
        endTurn: {},
      },
    },
  },
});
