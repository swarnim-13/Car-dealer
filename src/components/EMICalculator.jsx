import { useState } from "react"
import "./EMI.css"

function EMICalculator({ onClose }) {

  const [price, setPrice] = useState("")
  const [rate, setRate] = useState("")
  const [years, setYears] = useState("")
  const [emi, setEmi] = useState(null)

  const calculateEMI = () => {
    const P = parseFloat(price)
    const annualRate = parseFloat(rate)
    const N = parseFloat(years) * 12

    if (!P || !annualRate || !N) return

    const R = annualRate / 12 / 100

    const emiValue =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1)

    setEmi(emiValue.toFixed(0))
  }

  return (
    <div className="emi-overlay">
      <div className="emi-box">

        

        <h2>EMI Calculator</h2>

        <input
          type="number"
          placeholder="Loan Amount"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />

        <input
          type="number"
          placeholder="Loan Duration (Years)"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />

        <button onClick={calculateEMI}>
          Calculate EMI
        </button>

        

        {emi && (
          <div className="emi-result">
            Monthly EMI: ₹ {emi}
          </div>
        )}
        

      </div>
      <button className="emi-close" onClick={onClose}>✖</button>
    </div>
  )
}

export default EMICalculator
