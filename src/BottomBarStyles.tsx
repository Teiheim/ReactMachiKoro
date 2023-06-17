import styled from "@emotion/styled";
import { Accordion } from "@mui/material";

export const StyledMachiBar = styled(Accordion)`
  height: ${({ expanded }) => (expanded ? "100vh" : "auto")}
  overflow: none;
  /* Scrollbar styles */
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

const temp = `left: 0;
bottom: 0;
position: fixed;
width: 100%;
background-color: white;
border: 1px solid #000;
box-shadow: none;
"&:before": {
  display: "none",
},`;
