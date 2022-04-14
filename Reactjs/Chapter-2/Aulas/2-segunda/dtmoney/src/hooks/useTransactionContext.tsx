import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface TransactionProviderProps {
  children: ReactNode;
}

type TransactionData = {
  title: string;
  amount: number;
  type: string;
  category: string;
};

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}[];

interface TransactionContextProps {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  createTransaction: (transactionData: TransactionData) => Promise<void>;
  transactions: Transaction;
}

const TransactionContext = createContext({} as TransactionContextProps);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  async function createTransaction(transactionData: TransactionData) {
    const response = await api.post("/transactions", transactionData);
    const { transaction } = response.data;

    const newTransaction = {
      ...transaction,
      createAt: new Date(0),
    };

    setTransactions((oldState) => [...oldState, newTransaction]);
  }

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        isModalOpen,
        handleCloseModal,
        handleOpenModal,
        createTransaction,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransaction = () => useContext(TransactionContext);
