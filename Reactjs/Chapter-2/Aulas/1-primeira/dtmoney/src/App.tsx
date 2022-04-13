import React from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
};
