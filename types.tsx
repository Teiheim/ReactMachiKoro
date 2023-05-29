export interface Structure {
  cardName: string;
  price: number;
  activation: number[];
  description?: string;
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
  money: number;
  city: City[];
  landmarks: Landmark[];
}

export interface machiKoroCard {
  structure: Structure;
  amount: number;
}

export interface machiKoroDeck {
  [cardName: string]: machiKoroCard;
}

export interface machiKoroGame {
  players: Player[];
  cards: Structure[];
}
