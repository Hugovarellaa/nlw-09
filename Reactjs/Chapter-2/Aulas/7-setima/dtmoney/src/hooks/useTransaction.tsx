import { createContext, ReactNode, useContext, useState } from "react";

interface TransactionProvider {
  children: ReactNode;
}

interface TransactionContextProps {
  modalIsOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

const TransactionContext = createContext({} as TransactionContextProps);

export function TransactionProvider({ children }: TransactionProvider) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }
  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <TransactionContext.Provider
      value={{
        modalIsOpen,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransaction = () => useContext(TransactionContext);
