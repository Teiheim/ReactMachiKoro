export interface Structure {
  cardName: string;
  price: Number;
  activation: Number[];
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
  amount: Number;
}

export interface Player {
  money: Number;
  city: City[];
  landmarks: Landmark[];
}

export interface MachiKoroCard {
  structure: Structure;
  amount: Number;
}

export interface MachiKoroDeck {
  [cardName: string]: MachiKoroCard;
}

export interface MachiKoroGame {
  players: Player[];
  cards: Structure[];
}
