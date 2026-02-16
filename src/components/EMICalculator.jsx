import { useState, useEffect } from "react";
import "./EMI.css";

function EMICalculator({ onClose }) {
  const [amount, setAmount] = useState(2000000);
  const [rate, setRate] = useState(9.5);
  const [tenure, setTenure] = useState(60);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  useEffect(() => {
    const monthlyRate = rate / 12 / 100;
    const emiCalc =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);

    const totalPay = emiCalc * tenure;
    const interest = totalPay - amount;

    setEmi(Math.round(emiCalc));
    setTotalInterest(Math.round(interest));
    setTotalPayable(Math.round(totalPay));
  }, [amount, rate, tenure]);

  return (
    <div className="emi-overlay" onClick={onClose}>
      <div className="emi-container" onClick={(e) => e.stopPropagation()}>
        
        {/* LEFT SIDE CONTROLS */}
        <div className="emi-left">

          <div className="emi-field">
            <label>Loan Amount (₹)</label>
            <h3>₹{(amount / 100000).toFixed(1)} Lakh</h3>
            <input
              type="range"
              min="100000"
              max="5000000"
              step="50000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <div className="emi-field">
            <label>Tenure (Months)</label>
            <h3>{tenure} Months</h3>
            <input
              type="range"
              min="12"
              max="96"
              step="6"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
            />
          </div>

          <div className="emi-field">
            <label>Interest Rate (%)</label>
            <h3>{rate}%</h3>
            <input
              type="range"
              min="6"
              max="15"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </div>

        </div>

        {/* RIGHT SIDE RESULT */}
        <div className="emi-right">

          <div className="emi-main-card">
            <p>Monthly EMI</p>
            <h1>₹{emi.toLocaleString()}</h1>
          </div>

          <div className="emi-breakdown">
            <div>
              <p>Total Interest</p>
              <h3>₹{totalInterest.toLocaleString()}</h3>
            </div>
            <div>
              <p>Total Payable</p>
              <h3>₹{totalPayable.toLocaleString()}</h3>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default EMICalculator;
