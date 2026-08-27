export default function Summary({ checklist }) {
  const checklistItems = [
    {
      key: "affordInvest",
      label: "Invest What's Left",
    },
    {
      key: "diversifyInvest",
      label: "Diversifying Your Investments",
    },
    {
      key: "investLong",
      label: "Investing For the Long-term",
    },
    {
      key: "understandRisk",
      label: "Understanding Risk and Returns",
    },
    {
      key: "understandInvest",
      label: "Understanding Investments",
    },
  ]
  const selectedItems = checklistItems.filter((item) => checklist[item.key])

  return (
    <section className="summary">
      <h3>Continue Learning on How to Invest Safely</h3>

      {selectedItems.length > 0 ? (
        <ul>
          {selectedItems.map((item) => (
            <li key={item.key}>{item.label}</li>
          ))}
        </ul>
      ) : (
        <p>
          Explore more about the basics of investing, understanding risk,
          avoiding fraud and protecting your investments at Office of the
          Investor
        </p>
      )}
    </section>
  )
}
