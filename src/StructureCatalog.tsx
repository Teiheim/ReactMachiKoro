import React from 'react';
import { Box } from '@mui/material';

const CenteredBox = ({ children }) => {
  const { content } = children;
  return (
    <Box width="100%" height="100%" border="1px solid #000">
      {content}
    </Box>
  );
};

export default CenteredBox;
