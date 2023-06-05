import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';

export const StyledMachiCard = styled(Card)`
  width: 100%;
  max-width: 345px;
  border: 2px solid black;
  background-color: ${(props) => props.color};
  aspect-ratio: 0.7;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledMachiCardHeader = styled(CardHeader)`
  color: white;
  font-weight: 700;


`;

export const StyledMachiCardMedia = styled(CardMedia)`
  aspect-ratio: 0.7; /* Adjust as needed */
  flex-grow: 1;
`;

export const StyledMachiCardContent = styled(CardContent)`
  color: white;
  font-weight: 700;
`;

export const StyledMachiCardActions = styled(CardActions)`

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
`;

// const CardComponent = ({ card }) => {
//   return (
//     <StyledCard>
//       <StyledCardHeader
//         title={card.structure.cardName}
//         subheader={`Industry: ${card.structure.industry}`}
//         subheaderTypographyProps={{ fontWeight: 700 }}
//       />
//       <StyledCardMedia
//         component="img"
//         src="/static/images/cards/contemplative-reptile.jpg"
//         title="Green Iguana"
//       />
//       <StyledCardContent>
//         <Typography variant="body2" color="inherit">
//           <div>Activation: {card.structure.activation}</div>
//           <div>Income: {card.structure.price}</div>
//           <div>Price: {card.structure.price}$</div>
//           <div>Amount: {card.amount}</div>
//         </Typography>
//       </StyledCardContent>
//       <StyledCardActions>
//         <ColorButton>Buy</ColorButton>
//         {/* Additional buttons */}
//       </StyledCardActions>
//     </StyledCard>
//   );
// };

//export default CardComponent;
