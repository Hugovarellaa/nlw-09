import React from "react";
import Dashborad from "./components/Dashborad";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Dashborad />
      <GlobalStyles />
    </>
  );
};

export default App;
