import { useContext } from "react";
import { amountFromatter } from "../urils/helpers";
import { GlobalContext } from "../context/TransactionContext";

const IncomeExpence = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((item) => item.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{amountFromatter(income)}</p>
      </div>

      <div>
        <h4>Expence</h4>
        <p className="money minus">{amountFromatter(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpence;
