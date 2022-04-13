import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <GlobalStyles />
    </>
  );
};

export default App;
