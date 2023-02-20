import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';

interface Structure {
  cardName: string;
  amount: number;
}

interface Landmark {
  landmarkName:
    | 'Train Station'
    | 'Shopping Mall'
    | 'Amusement Park'
    | 'Radio Tower';
  activated: boolean;
}

interface Player {
  money: number;
  structures: Structure[];
  landmarks: Landmark[];
}

const machiMachine = createMachine({
  id: 'machiKoro',
  initial: 'gameRoom.joinGame',
  context: {
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
