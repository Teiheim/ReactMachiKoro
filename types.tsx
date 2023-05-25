export interface Structure {
  cardName: string;
  price: number;
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

export interface Player {
  money: number;
  structures: Structure[];
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
