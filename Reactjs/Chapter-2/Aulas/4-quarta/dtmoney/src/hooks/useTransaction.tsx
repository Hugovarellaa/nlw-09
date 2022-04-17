import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface TransactionProvideProps {
  children: ReactNode;
}

interface TransactionData {
  title: string;
  amount: number;
  type: string;
  category: string;
}

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}[];

interface TransactionContextProps {
  transactions: Transaction;
  modalIsOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  createTransaction: (transactionData: TransactionData) => Promise<void>;
}

const Transaction = createContext({} as TransactionContextProps);

export function TransactionProvider({ children }: TransactionProvideProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transactions, setTransactions] = useState<Transaction>([]);

  function handleOpenModal() {
    setModalIsOpen(true);
  }
  function handleCloseModal() {
    setModalIsOpen(false);
  }

  async function createTransaction(transactionData: TransactionData) {
    const response = await api.post("/transactions", transactionData);
    const { transaction } = response.data;
    const newTransaction = {
      ...transaction,
      createAt: new Date(),
    };

    setTransactions((oldState) => [...oldState, newTransaction]);
  }

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Transaction.Provider
      value={{
        transactions,
        modalIsOpen,
        handleOpenModal,
        handleCloseModal,
        createTransaction,
      }}
    >
      {children}
    </Transaction.Provider>
  );
}

export const useTransaction = () => useContext(Transaction);
