export default function Summary({ checklist }) {
  const checklistItems = [
    {
      key: "affordInvest",
      label: "Invest What's Left",
      description: "to find more about the basics of investing, check ",
      title: "Investing Basics",
      link: "https://www.ciro.ca/office-investor/investing-basics",
      image: "",
    },
    {
      key: "diversifyInvest",
      label: "Diversifying Your Investments",
      description: "to find more about the basics of investing, check ",
      title: "Diversifying Your Investments",
      link: "https://www.ciro.ca/office-investor/investing-basics/why-diversify-your-portfolio",
      image: "",
      
    },
    {
      key: "investLong",
      label: "Investing For the Long-term",
      description: "to find more about the basics of investing, check ",
      title: "Compound Interest",
      link: "https://www.ciro.ca/office-investor/investing-basics/compound-interest",
      image: "",
    },
    {
      key: "understandRisk",
      label: "Understanding Risk and Returns",
      description: "to find more about the basics of investing, check ",
      title: "Understanding Risk",
      link: "https://www.ciro.ca/office-investor/understanding-risk",
      image: "",
    },
    {
      key: "understandInvest",
      label: "Understanding Investments",
      description: "explore opportunities for investing by",
      title: "Understanding Investment Performance and Returns",
      link: "https://www.ciro.ca/office-investor/investing-basics/understanding-investment-performance-returns",
      image: "",
    },
  ];
  const selectedItems = checklistItems.filter((item) => checklist[item.key]);

  return (
    <section className="summary">
      <h2>Next Steps</h2>
      <h3>Continue Learning on How to Invest Safely</h3>

      {selectedItems.length > 0 ? (
        <ul>
          {selectedItems.map((item) => (
            <li key={item.key}>{item.label} - {item.description}<a href="${item.link}">{item.title}</a></li>
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
  );
}
