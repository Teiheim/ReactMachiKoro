export const machiKoroCards = {
  'Wheat Field': {
    structure: {
      cardName: 'Wheat Field',
      price: 1,
      color: 'blue',
      activationNumbers: [1],
      income: 1,
      industry: 'Primary',
    },
    amount: 5,
  },
  Ranch: {
    structure: {
      cardName: 'Ranch',
      price: 1,
      color: 'blue',
      activationNumbers: [2],
      income: 1,
      industry: 'Primary',
    },
    amount: 3,
  },
  Bakery: {
    structure: {
      cardName: 'Bakery',
      price: 1,
      color: 'green',
      activationNumbers: [2, 3],
      income: 1,
      industry: 'Secondary',
    },
    amount: 2,
  },
  Cafe: {
    structure: {
      cardName: 'Cafe',
      price: 2,
      color: 'red',
      activationNumbers: [3],
      income: 1,
      industry: 'Service',
    },
    amount: 4,
  },
  'Convenience Store': {
    structure: {
      cardName: 'Convenience Store',
      price: 2,
      color: 'green',
      activationNumbers: [4],
      income: 3,
      industry: 'Secondary',
    },
    amount: 3,
  },
  Forest: {
    structure: {
      cardName: 'Forest',
      price: 3,
      color: 'blue',
      activationNumbers: [5],
      income: 1,
      industry: 'Primary',
    },
    amount: 2,
  },
  'Cheese Factory': {
    structure: {
      cardName: 'Cheese Factory',
      price: 5,
      color: 'green',
      activationNumbers: [7],
      income: 3,
      industry: 'Secondary',
    },
    amount: 2,
  },
  'Furniture Factory': {
    structure: {
      cardName: 'Furniture Factory',
      price: 3,
      color: 'green',
      activationNumbers: [8],
      income: 3,
      industry: 'Secondary',
    },
    amount: 2,
  },
  'TV Station': {
    structure: {
      cardName: 'TV Station',
      price: 7,
      color: 'purple',
      activationNumbers: [6],
      income: 0,
      industry: 'Major',
    },
    amount: 1,
  },
  Mine: {
    structure: {
      cardName: 'Mine',
      price: 6,
      color: 'blue',
      activationNumbers: [9],
      income: 5,
      industry: 'Primary',
    },
    amount: 6,
  },
  'Family Restaurant': {
    structure: {
      cardName: 'Family Restaurant',
      price: 3,
      color: 'red',
      activationNumbers: [9, 10],
      income: 2,
      industry: 'Service',
    },
    amount: 2,
  },
  'Apple Orchard': {
    structure: {
      cardName: 'Apple Orchard',
      price: 3,
      color: 'blue',
      activationNumbers: [10],
      income: 3,
      industry: 'Primary',
    },
    amount: 6,
  },
  'Fruit and Vegetable Market': {
    structure: {
      cardName: 'Fruit and Vegetable Market',
      price: 2,
      color: 'green',
      activationNumbers: [11, 12],
      income: 2,
      industry: 'Secondary',
    },
    amount: 2,
  },
  Stadium: {
    structure: {
      cardName: 'Stadium',
      price: 6,
      color: 'purple',
      activationNumbers: [6],
      income: 0,
      industry: 'Major',
    },
    amount: 1,
  },
  'Business Center': {
    structure: {
      cardName: 'Business Center',
      price: 8,
      color: 'purple',
      activationNumbers: [6],
      income: 0,
      industry: 'Major',
    },
    amount: 1,
  },
};

export const machiKoroDeckList = Object.keys(machiKoroCards);
export const landmarks = {
  'Train Station': {
    landmarkName: 'Train Station',
    activated: false,
  },
  'Shopping Mall': {
    landmarkName: 'Shopping Mall',
    activated: false,
  },
  'Amusement Park': {
    landmarkName: 'Amusement Park',
    activated: false,
  },
  'Radio Tower': {
    landmarkName: 'Radio Tower',
    activated: false,
  },
};
