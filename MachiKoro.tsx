import { machiMachine } from './gameMachine/gameMachine';
import { interpret } from 'xstate';

const service = interpret(machiMachine).onTransition((state) => {
  console.log(state.value);
});

// Start the service
service.start();

// Send events
service.send({ type: 'SOME_EVENT' });

// Stop the service when you are no longer using it.
// service.stop();
