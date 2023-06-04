import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ColorButton } from './MachiButton';
import StructureCatalog from './StructureCatalog';

interface AccordionProps {
  title: string;
  content: string;
}

export const CustomAccordion: React.FC<AccordionProps> = ({
  title,
  content,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleAccordionChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleAccordionChange}
      sx={{
        left: 0,
        bottom: 0,
        position: 'fixed',
        width: '100%',
        height: expanded ? '100vh' : 'auto',
        backgroundColor: 'white',
        border: '1px solid #000',
        boxShadow: 'none',
        '&:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <ColorButton>{expanded ? 'Close' : 'Purchase'}</ColorButton>
        }
        aria-controls="accordion-content"
        id="accordion-header"
      >
        <Typography variant="h6">
          {expanded ? 'Purchase Structures' : title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ height: expanded ? '100vh' : 'auto' }}>
        <div
          style={{
            backgroundColor: '#f2f2f2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            height: '80%',
            margin: 'auto',
            border: '1px solid #000',
            borderRadius: '8px',
          }}
        >
          <div>{content}</div>
          {/* <Typography>
            <StructureCatalog>{content}</StructureCatalog>
          </Typography> */}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
