// me animations ke liye react bits use kr rha hu or muje vo use
//  krne ke liye fadeup banana padega or isko bas main file me import krte jaao
import { useEffect, useRef, useState } from "react"

function FadeUp({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(60px)",
        transition: "opacity 1s ease, transform 1s ease"
      }}
    >
      {children}
    </div>
  )
}

export default FadeUp
