import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface TransactionContextProps {
  transactions: Transaction;
  isOpenModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  createTransaction: (transactionData: TransactionData) => Promise<void>;
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

interface TransactionProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext({} as TransactionContextProps);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [transactions, setTransactions] = useState<Transaction>([]);

  function handleOpenModal() {
    setIsOpenModal(true);
  }
  function handleCloseModal() {
    setIsOpenModal(false);
  }

  async function createTransaction(transactionData: TransactionData) {
    const response = await api.post("transactions", transactionData);
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
    <TransactionContext.Provider
      value={{
        transactions,
        isOpenModal,
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
