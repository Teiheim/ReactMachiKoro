import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ColorButton } from "./MachiButton/MachiButton";
import MachiCard from "./MachiCard/MachiCard";
import { MachiKoroCard } from "./types";
import styled from "@emotion/styled";
import { StyledMachiBar } from "./BottomBarStyles";

interface AccordionProps {
  title: string;
  content: string;
}

const GridContainer = styled.div`
  background-color: #f2f2f2;
  width: 80%;
  height: 80%;
  margin: auto;
  border: 1px solid #000;
  border-radius: 8px;
  display: grid;
    2,
    1fr
  ); // Replace n with the desired number of columns
  gap: 16px; // Adjust as needed
  padding: 16px; // Adjust as needed
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f2f2f2;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const MachiKoroCardContainer = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px; // Adjust as needed
  margin-bottom: 16px; // Add margin-bottom to create separation between rows
`;

export const CustomAccordion: React.FC<any> = ({
  title,
  content,
  machiKoroDeck,
}) => {
  console.log(machiKoroDeck);
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleAccordionChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <StyledMachiBar>
      {/* <Accordion
    //   expanded={expanded}
    //   onChange={handleAccordionChange}
    //   sx={{
    //     left: 0,
    //     bottom: 0,
    //     position: "fixed",
    //     width: "100%",
    //     height: expanded ? "100vh" : "auto",
    //     backgroundColor: "white",
    //     border: "1px solid #000",
    //     boxShadow: "none",
    //     "&:before": {
    //       display: "none",
    //     },
    //   }}
    // > */}
      <AccordionSummary
        expandIcon={
          <ColorButton onClick={() => setExpanded(!expanded)}>
            {expanded ? "Close" : "Purchase"}
          </ColorButton>
        }
        aria-controls="accordion-content"
        id="accordion-header"
        sx={{ height: "10vh" }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {console.log(expanded)}
          {console.log(expanded ? "Purchase Structures" : title)}
          {expanded ? "Purchase Structures" : title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ zIndex: 9999, height: "90vh" }}>
        <GridContainer>
          <Grid container spacing={2}>
            {Object.values(machiKoroDeck).map((card: MachiKoroCard, index) => (
              <Grid
                sx={{ width: "100%", margin: 0, padding: 0 }}
                item
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <MachiCard card={card} color={card.structure.color} />
              </Grid>
            ))}
          </Grid>
        </GridContainer>
      </AccordionDetails>
    </StyledMachiBar>
  );
};
