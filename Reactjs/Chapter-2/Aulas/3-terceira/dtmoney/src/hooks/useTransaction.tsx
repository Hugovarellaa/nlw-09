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

interface TransactionContextProps {
  modalIsOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  createTransaction: (transactionData: TransactionData) => Promise<void>;
  transactions: Transaction;
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

const TransactionContext = createContext({} as TransactionContextProps);

export function TransactionProvider({ children }: TransactionProviderProps) {
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

    // verificacao se os campos nao estao vazios
    const { title, amount, type, category } = transaction;
    if (!title || !amount || !type || !category) {
      return;
    }

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
    <TransactionContext.Provider
      value={{
        handleCloseModal,
        handleOpenModal,
        modalIsOpen,
        transactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransaction = () => useContext(TransactionContext);
