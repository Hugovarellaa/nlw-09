import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface TransactionProvider {
  children: ReactNode;
}

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}[];

interface TransactionData {
  title: string;
  amount: number;
  type: string;
  category: string;
}

interface TransactionContextProps {
  transactions: Transaction;
  modalIsOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  createTransaction: (transactionData: TransactionData) => Promise<void>;
}

const TransactionContext = createContext({} as TransactionContextProps);

export function TransactionProvider({ children }: TransactionProvider) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transactions, setTransactions] = useState<Transaction>([]);

  function handleOpenModal() {
    setModalIsOpen(true);
  }
  function handleCloseModal() {
    setModalIsOpen(false);
  }

  async function createTransaction(transactionData: TransactionData) {
    const response = await api.post("transactions", transactionData);
    const { transaction } = response.data;

    const newTransactions = {
      ...transaction,
      createAt: new Date(),
    };

    setTransactions((oldState) => [...oldState, newTransactions]);
  }

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);
  return (
    <TransactionContext.Provider
      value={{
        transactions,
        modalIsOpen,
        handleOpenModal,
        handleCloseModal,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransaction = () => useContext(TransactionContext);
