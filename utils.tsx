import { Structure, Player, MachiKoroDeck, City, MachiKoroCard } from './types';

export const getActivatedCards = (
  completeField,
  machiKoroCards,
  dice,
  activatedCards
) => {
  completeField.forEach((structure: City) => {
    console.log(structure);
    const completeCardInfo: Structure =
      machiKoroCards[structure.cardName].structure;
    console.log(completeCardInfo);
    const canActivateCard: boolean = completeCardInfo.activation.includes(dice);
    const cardColor: string = completeCardInfo.color;
    if (canActivateCard) activatedCards[cardColor].push(structure);
  });
};
