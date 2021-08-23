import { useState } from "react";

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState("");
  const [show, setShow] = useState(false);
  console.log(amount, currentCurrency);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentCurrency === "") {
      alert("select Currency");
    } else if (currentCurrency === "USD") {
    }
    setShow(true);
  };

  return (
    <div>
      <h1>Currency Converter From USD To INR And Vice Versa</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Enter Amount"
          />
          <select onChange={(e) => setCurrentCurrency(e.target.value)}>
            <option value="">Choose</option>
            <option value="INR">₹</option>
            <option value="USD">$</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
      <div>{show && <span>{currentCurrency === "INR" ? "₹" : "$"}</span>}</div>
    </div>
  );
};
