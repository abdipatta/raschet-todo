import { useContext, useState } from "react";
import { GlobalContext } from "../context/TransactionContext";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  console.log(text, amount);

  const { addTransaction } = useContext(GlobalContext);

  const SubmitHandler = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
      id: Math.floor(Math.random() * 1000),
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add Transaction</h3>

      <form onSubmit={SubmitHandler}>
        <div>
          <label htmlFor="text">Text</label>

          <input
            placeholder="Enter text..."
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="amount">Amount</label>

          <input
            placeholder="Enter amount..."
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
