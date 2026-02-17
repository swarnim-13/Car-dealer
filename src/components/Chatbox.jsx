// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import "./ChatBox.css"

// function ChatBox() {

//   const [isOpen, setIsOpen] = useState(false)
//   const [messages, setMessages] = useState([])
//   const navigate = useNavigate()

//   // FAQ DATA (you can edit answers anytime)
//   const faqs = [
//     {
//       question: "What documents are required to buy a car?",
//       answer: "You need Aadhaar Card, PAN Card, Address Proof and Income Proof for financing."
//     },
//     {
//       question: "Do you provide EMI / Financing?",
//       answer: "Yes, we provide easy EMI options with flexible tenure plans."
//     },
//     {
//       question: "Can I book a test drive online?",
//       answer: "Yes! Click on 'Book Test Drive' and our team will contact you."
//     },
//     {
//       question: "Do cars come with warranty?",
//       answer: "Yes, certified vehicles include warranty options."
//     }
//   ]

//   const addMessage = (text, isUser = false) => {
//     setMessages(prev => [...prev, { text, isUser }])
//   }

//   const handleFAQClick = (faq) => {
//     addMessage(faq.question, true)
//     setTimeout(() => {
//       addMessage(faq.answer)
//     }, 400)
//   }

//   const handleQuickAction = (type) => {

//     if (type === "cars") {
//       navigate("/Car")
//       setIsOpen(false)
//     }

//     if (type === "emi") {
//       addMessage("You can use our EMI Calculator from the top menu.")
//     }

//     if (type === "testdrive") {
//       addMessage("Please call us at +91 98765 43210 to book a test drive.")
//     }

//     if (type === "contact") {
//       addMessage("You can reach us at info@cardealer.com or call +91 98765 43210.")
//     }
//   }

//   return (
//     <>
//       {/* Floating Button */}
//       <div className="chat-float-btn" onClick={() => setIsOpen(!isOpen)}>
//         💬
//       </div>

//       {isOpen && (
//         <div className="chat-overlay" onClick={() => setIsOpen(false)}>
//           <div className="chat-box" onClick={(e) => e.stopPropagation()}>

//             <div className="chat-header">
//               <h3>Car Dealer Support</h3>
//             </div>

//             <div className="chat-body">

//               <p className="chat-welcome">
//                 👋 Hi! How can we help you?
//               </p>

//               <div className="quick-actions">
//                 <button onClick={() => handleQuickAction("cars")}>View Cars</button>
//                 <button onClick={() => handleQuickAction("emi")}>EMI Help</button>
//                 <button onClick={() => handleQuickAction("testdrive")}>Book Test Drive</button>
//                 <button onClick={() => handleQuickAction("contact")}>Contact Dealer</button>
//               </div>

//               <div className="faq-section">
//                 <h4>Frequently Asked Questions</h4>
//                 {faqs.map((faq, index) => (
//                   <div 
//                     key={index} 
//                     className="faq-item"
//                     onClick={() => handleFAQClick(faq)}
//                   >
//                     {faq.question}
//                   </div>
//                 ))}
//               </div>

//               <div className="chat-messages">
//                 {messages.map((msg, index) => (
//                   <div 
//                     key={index}
//                     className={`chat-message ${msg.isUser ? "user" : "bot"}`}
//                   >
//                     {msg.text}
//                   </div>
//                 ))}
//               </div>

//             </div>

//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default ChatBox
