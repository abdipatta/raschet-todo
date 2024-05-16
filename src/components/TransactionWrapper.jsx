import AddTransaction from "./AddTransaction";
import TransactionProvider from "../context/TransactionContext";
import Balans from "./Balans";
import IncomeExpence from "./IncomeExpence";
import TransactionList from "./TransactionList";

const TransactionWrapper = () => {
  return (
    <TransactionProvider>
      <Balans />
      <IncomeExpence />
      <TransactionList />
      <AddTransaction />
    </TransactionProvider>
  );
};

export default TransactionWrapper;
