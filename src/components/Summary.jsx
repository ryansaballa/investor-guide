export default function Summary({ checklist }) {
  const checklistItems = [
    {
      key: "affordInvest",
      label: "Investing What's Left",
      description: "Explore the Basics of Investing and Principals for ",
      link: "https://www.ciro.ca/office-investor/investing-basics",
      image: "",
    },
    {
      key: "diversifyInvest",
      label: "Diversifying Your Investments",
      description: "Take Advantage of Different Assets Classes",
      link: "https://www.ciro.ca/office-investor/investing-basics/why-diversify-your-portfolio",
      image: "",
    },
    {
      key: "investLong",
      label: "Investing For the Long-term",
      description: "Re-think about Your Short-term and Long-term Goals",
      link: "https://www.ciro.ca/office-investor/investing-basics/compound-interest",
      image: "",
    },
    {
      key: "understandRisk",
      label: "Understanding Risk and Returns",
      description:
        "Anticipate Risks and Place Strategies Manage or Reduce the Impact",
      link: "https://www.ciro.ca/office-investor/understanding-risk",
      image: "",
    },
    {
      key: "understandInvest",
      label: "Understanding Investments",
      description: "Understanding Investment Performance and Returns",
      link: "https://www.ciro.ca/office-investor/investing-basics/understanding-investment-performance-returns",
      image: "",
    },
  ]
  const selectedItems = checklistItems.filter((item) => checklist[item.key])

  return (
    <section className="summary">
      <h2>Next Steps</h2>
      <h3>Continue Learning on How to Invest Safely</h3>

      {selectedItems.length > 0 ? (
        <ul>
          {selectedItems.map((item) => (
            <li key={item.key}>
              <a href="${item.link}">{item.label}</a>: {item.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>
          Explore more about the basics of investing, understanding risk,
          avoiding fraud and protecting your investments at{" "}
          <a href="https://wwww.ciro.ca/office-investor">
            Office of the Investor
          </a>
        </p>
      )}
      <div className="callout">
        <h2>About the Office of the Investor</h2>
        <div>
          <p>The Office of the Investor has a mandate to:</p>
          <ul>
            <li>Support policy development</li>
            <li>Educate investors</li>
            <li>Engage in investor outreach</li>
            <li>Perform investor research</li>
            <li>Support the Investor Advisory Panel (IAP)</li>
          </ul>
          <p>
            <strong>Contact</strong>
          </p>
          <p>
            To inquire about our outreach sessions or connect with us on
            investor education or outreach initiatives, please contact us at:
            <a href="mailto:officeoftheinvestor@ciro.ca" target="_self">
              officeoftheinvestor@ciro.ca
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
