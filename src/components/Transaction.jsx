import { useContext } from "react";
import { amountFromatter } from "../urils/helpers";
import { GlobalContext } from "../context/TransactionContext";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}

      <span>
        {sign}
        {amountFromatter(transaction.amount)}
      </span>

      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
