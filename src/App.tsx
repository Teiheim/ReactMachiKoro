import * as React from "react";
import "./style.css";
import { machiKoroCards } from "./cardLibrary";
import { useMachiMachine } from "./MachiKoro";
import { MainContainer } from "./MachiKoroContainer";
import { machiKoroGameExample } from "./testData";

export default function App() {
  const card = machiKoroCards["Wheat Field"];

  const machi = useMachiMachine();
  return (
    <MainContainer
      machiContext={/*machi.state.context*/ machiKoroGameExample}
    ></MainContainer>
  );
  //return <GameRoomCreation createGame={machi.createMachiRoom} />;
}
