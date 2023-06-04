import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ColorButton } from './MachiButton';

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
    <Accordion expanded={expanded} onChange={handleAccordionChange}>
      <AccordionSummary
        expandIcon={<ColorButton></ColorButton>}
        aria-controls="accordion-content"
        id="accordion-header"
      >
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
