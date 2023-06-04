export interface Structure {
  cardName: string;
  price: number;
  activation: number[];
  description?: string;
  income: number;
  industry: string;
  color: 'blue' | 'red' | 'green' | 'purple';
}

export interface Landmark {
  landmarkName:
    | 'Train Station'
    | 'Shopping Mall'
    | 'Amusement Park'
    | 'Radio Tower';
  activated: boolean;
}

export interface City {
  cardName: string;
  amount: number;
}

export interface Player {
  playerName: string;
  id: string;
  money: number;
  city: City[];
  landmarks: Set<Landmark>;
}

export interface MachiKoroCard {
  structure: Structure;
  amount: number;
}

export interface MachiKoroDeck {
  [cardName: string]: MachiKoroCard;
}

export interface MachiKoroGame {
  players: Player[];
  cards: MachiKoroDeck;
  playerInTurn: number;
  cardHistory: Structure[];
  roomName: string;
}
