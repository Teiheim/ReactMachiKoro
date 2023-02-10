import * as React from 'react';
import { GameUI } from './GameUI/GameUI';
import './style.css';
import { PlayingCard } from './styles';

const CardComponent = (props: any) => {
  return <PlayingCard></PlayingCard>;
};

export default function App() {
  return (
    <GameUI>
      <div>
        <CardComponent></CardComponent>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :^)</p>
      </div>
    </GameUI>
  );
}
