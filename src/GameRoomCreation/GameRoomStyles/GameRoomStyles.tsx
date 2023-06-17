import { Container, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const StyledGameRoomContainer = styled(Container)`
display: 'flex',
align-items: 'center',
justify-content: 'center',
height: '100vh',
border-sizing: 'border-box',
`;

export const StyledGameRoomBox = styled(Box)`
flex-wrap: 'wrap',
align-items: 'center',
justify-content: 'center',
background-color: '#f2f2f2',
padding: '16px',
borderRadius: '4px',
width: '100%',
height: '50%',
boxShadow: '2px 2px 0px 0px rgba(0, 0, 0, 1)',
border: '2px solid black',
overflow: 'scroll',
`;
