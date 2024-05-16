import { useContext } from "react";
import { GlobalContext } from "../context/TransactionContext";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>

      <ul className="list">
        {transactions?.map((item) => (
          <Transaction key={item.id} transaction={item} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
