import * as React from 'react';
import { Box } from '@mui/material';
import { CustomAccordion } from './BottomBar';
import { machiKoroCards } from './cardLibrary';
import SplitPane from 'react-split-pane-v2';

export const MainContainer: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        boxSizing: 'border-box',
        '& > *:first-child': {
          flexGrow: 1,
          overflow: 'auto',
        },
      }}
    >
      <SplitPane split="vertical" defaultSize="33%">
        <div>pane 1 size: 33%</div>
        <SplitPane split="vertical" defaultSize="50%">
          <div>pane 2 size: 50% (of remaining space)</div>
          <div>pane 3</div>
        </SplitPane>
      </SplitPane>
      <CustomAccordion
        title="Your title"
        content="Your content"
        machiKoroDeck={machiKoroCards}
      />
    </Box>
  );
};
