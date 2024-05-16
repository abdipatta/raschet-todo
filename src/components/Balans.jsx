import { useContext } from "react";
import { GlobalContext } from "../context/TransactionContext";
import { amountFromatter } from "../urils/helpers";

const Balans = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((item) => item.amount);

  const total = amounts.reduce((acc, amount) => (acc += amount), 0);

  return (
    <div>
      <h4>Your balance</h4>

      <h1>{amountFromatter(total)}</h1>
    </div>
  );
};

export default Balans;
