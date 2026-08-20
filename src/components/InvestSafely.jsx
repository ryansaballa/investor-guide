import { useState } from "react"
export default function InvestSafely() {
  const [openCard, setOpenCard] = useState([])

  const toggleCard = (card) => {
    setOpenCard((prev) =>
      prev.includes(card)
        ? prev.filter((item) => item !== card)
        : [...prev, card],
    )
  }

  return (
    <section className="investSafely">
      <h2>Invest Safely </h2>
      <div className="cards">
        <article
          className={`card${openCard.includes("rich") ? "card--open" : ""}`}
          onClick={() => toggleCard("rich")}
        >
          <h3>Get Rich Quick</h3>

          {openCard.includes("rich") && (
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
        <article
          className={`card ${openCard.includes("community") ? "card--open" : ""}`}
          onClick={() => toggleCard("community")}
        >
          <h3>Trusted Community</h3>
          {openCard.includes("community") && (
            <div className="card-details">
              <p>
                Building trusted relationships takes time. Connecting with
                people in your community can create opportunities to share
                ideas, experiences, and practical insights.
              </p>
              <p>
                Having trusted people nearby can offer reassurance and support
                when navigating new or unfamiliar situations.
              </p>
            </div>
          )}
        </article>
      </div>
    </section>
  )
}
