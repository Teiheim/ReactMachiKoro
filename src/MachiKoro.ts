import { machiMachine } from './gameMachine/gameMachine';
import { useMachine } from '@xstate/react';
import { interpret } from 'xstate';

export const useMachiMachine = () => {
  const [state, send] = useMachine(machiMachine);

  const createMachiRoom = (
    players: { playerName: string; id: string }[],
    roomName: string
  ) =>
    send({
      type: 'SETUP_GAME',
      data: { players: players, roomName: roomName },
    });

  const createNewStructure = (playerNum: number, cardName: string) =>
    send({
      type: 'CREATE_STRUCTURE',
      data: { playerNum: playerNum, cardName: cardName },
    });
  return {
    state,
    createMachiRoom,
    createNewStructure,
  };
};
// Stop the service when you are no longer using it.
// service.stop();
