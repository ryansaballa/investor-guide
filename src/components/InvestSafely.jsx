import { useState } from "react"
export default function InvestSafely() {
  const [openCard, setOpenCard] = useState(null)

  const toggleCard = (card) => {
    setOpenCard(openCard === card ? null : card)
  }

  return (
    <section className="investSafely">
      <h2>Invest Safely </h2>
      <div className="cards">
        <article
          className={`card${openCard === "rich" ? "card--open" : ""}`}
          onClick={() => toggleCard("rich")}
        >
          <h3>Get Rich Quick</h3>

          {openCard === "rich" && (
            <div className="card-details">
              <p>
                Promises of quick and easy returns or ‘get rich quick’
                opportunities can seem tempting, especially when the risks
                involved are not immediately clear.
              </p>
              <p>
                Be cautious of investments that promise high returns with little
                or no risk. Legitimate investments generally involve some level
                of uncertainty.
              </p>
            </div>
          )}
        </article>
      </div>
    </section>
  )
}
