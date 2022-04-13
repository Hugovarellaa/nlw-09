import React from "react";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  );
};
