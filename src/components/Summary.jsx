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
              <a href={item.link}>{item.label}</a>: {item.description}
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
          .
        </p>
      )}
    </section>
  )
}
