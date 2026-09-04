import { useState } from "react"

export default function InvestmentJourney() {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const accordionItems = [
    {
      id: "diy",
      title: "Do It Yourself (DIY) Investing",
      content: [
        "Do-it-yourself (DIY) investing is a method in which individual investors choose to build and manage their own portfolios.",
        "Choosing to DIY can be less expensive but requires significant time and effort to research investments and consistently reevaluate your portfolio as your life changes.",
      ],
    },
    {
      id: "registered",
      title: "Investing with a Registered Advisor",
      content: [
        "Firms and individuals working with you must make investment recommendations suitable to your circumstances. Before proposing any investments or activity, your advisor must work with you to determine what types of investments fit your immediate and longterm financial needs.",
        "Registered advisors charge for the service of researching and re-evaluating for you. They can also offer advice with budgeting, loans and other personal finance matters.",
      ],
    },
    {
      id: "provide-info",
      title: "Information You Need to Provide",
      content: [
        "To meet CIRO, tax and legal requirements, and to protect against money laundering and fraud, advisors/firms must obtain certain personal information when you open an account, including: ",
      ],
      bullets: [
        "Full Legal Name",
        "Social Insurance Number",
        "Citizenship",
        "Spousal Information",
        "Home Address",
      ],
    },
    {
      id: "receive-info",
      title: "Information You Need to Receive",
      content: [
        "You have rights as an investor and are entitled to request as much information as you need to feel comfortable, including: ",
      ],
      bullets: [
        "Relationship Disclosure Agreement",
        "Firm's Products, Services and Fee Structure",
        "Service or Referral Fees",
        "Risks of Borrowing to Invest",
        "Privacy Statement",
      ],
    },
  ]

  return (
    <>
      <section className="investmentJourney">
        <h2>Investment Journey</h2>
        <p>Select each item to explore your investing options:</p>
        {accordionItems.map((item) => (
          <div
            className={`accordion-item ${
              openItems.includes(item.id) ? "accordion-button--open" : ""
            }`}
            key={item.id}
          >
            <button
              className="accordion-button"
              onClick={() => toggleItem(item.id)}
            >
              <h3>{item.title}</h3>
              <span className="accordion-arrow">
                {openItems.includes(item.id) ? "↑" : "↓"}
              </span>
            </button>
            {openItems.includes(item.id) && (
              <div className="accordion-desc">
                <div>
                  {item.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {item.bullets && (
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  )
}
