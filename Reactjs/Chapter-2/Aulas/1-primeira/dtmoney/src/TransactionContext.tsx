import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "./services/api";

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionContextProps {
  isOpenModal: boolean;
  transactions: Transaction;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  CreateTransaction: (transactionData: TransactionData) => Promise<void>;
}

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}[];

type TransactionData = {
  title: string;
  amount: number;
  type: string;
  category: string;
};

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

  async function CreateTransaction(transactionData: TransactionData) {
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
    <TransactionContext.Provider
      value={{
        handleCloseModal,
        isOpenModal,
        handleOpenModal,
        transactions,
        CreateTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransaction = () => useContext(TransactionContext);
