import * as React from 'react';
import { GameUIContainer } from './styles/GameUIStyles';

export const GameUI = (props: any) => {
  return <GameUIContainer>{props.children}</GameUIContainer>;
};
