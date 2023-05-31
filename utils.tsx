import { Structure, Player, MachiKoroDeck, City } from './types';

const getActivatedCards = (
  completeField,
  machiKoroCards,
  dice,
  activatedCards
) => {
  completeField.forEach((structure: City, player) => {
    const completeCardInfo: Structure = machiKoroCards[structure.cardName];
    const canActivateCard: boolean = completeCardInfo.activation.includes(dice);
    const cardColor: string = completeCardInfo.color;
    if (canActivateCard)
      activatedCards[cardColor].push({ structure, player: player });
  });
};
