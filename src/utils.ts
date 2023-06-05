export const getColor = (color: 'blue' | 'red' | 'green' | 'purple') => {
  return color === 'blue'
    ? '#00A8E8'
    : color === 'red'
    ? '#FF615D'
    : color === 'green'
    ? '#00FF8B'
    : '#BF00FF';
};
