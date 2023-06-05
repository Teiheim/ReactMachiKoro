import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { MachiKoroCard } from '../types';
import { ColorButton } from '../MachiButton/MachiButton';
import { CardHeader } from '@mui/material';
import { useState } from 'react';

const flexItemStyle = {
  display: 'block',
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: 'auto',
  alignSelf: 'auto',
  order: 0,
  width: '100%',
};

export default function MediaCard({ card }: { card: MachiKoroCard }) {
  const [purchaseAmount, setAmount] = useState(0);
  const changePurchaseAmount = (sign: '+' | '-') => {
    sign === '+'
      ? setAmount(purchaseAmount + 1)
      : setAmount(purchaseAmount - 1);
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        border: '2px solid black',
        backgroundColor: '#00A8E8',
        boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
      }}
    >
      <CardHeader
        title={card.structure.cardName}
        sx={{ color: 'white', fontWeight: 700 }}
        subheader={`Industry: ${card.structure.industry}`}
        subheaderTypographyProps={{ color: 'white', fontWeight: 700 }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: 'white' }}
        >
          {card.structure.cardName}
        </Typography>
      </CardHeader>
      <CardMedia
        sx={{ height: 140 }}
        //image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="white" fontWeight="700">
          <div style={flexItemStyle}>
            Activation: {card.structure.activation}
          </div>
          <div style={flexItemStyle}>Income: {card.structure.price}</div>
          <div>Price: {card.structure.price}$</div>
          <div>Amount: {card.amount}</div>
        </Typography>
      </CardContent>
      <CardActions>
        <ColorButton>Buy</ColorButton>
        <ColorButton
          onClick={() => {
            if (purchaseAmount < card.amount) {
              changePurchaseAmount('+');
            }
          }}
        >
          +
        </ColorButton>
        <ColorButton
          onClick={() => {
            if (purchaseAmount > 0) {
              changePurchaseAmount('-');
            }
          }}
        >
          -
        </ColorButton>
        <ColorButton>{purchaseAmount}</ColorButton>
      </CardActions>
    </Card>
  );
}
