import { useState } from "react";
export default function SavingInvesting({ checklist, setChecklist }) {
  const [selected, setSelected] = useState("saving");

  const content = {
    saving: {
      title: "Saving",
      bullets: [
        "Put cash in an account at a Canadian financial institution",
        "Access your savings whenever you want",
        "Earn some amount of interest",
      ],
    },
    investing: {
      title: "Investing",
      bullets: [
        "Buy assets that you hope will grow and/or create income",
        "Explore stocks, bonds, mutual funds, among many other options",
        "Gain, lose or maintain value depending on risk tolerance over time",
      ],
    },
  };

  const handleChange = (field, value) => {
    setChecklist((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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
  ];

  const selectedItems = checklistItems.filter((item) => checklist[item.key]);

  return (
    <>
      <section className="savingInvesting">
        <h2>Difference between Saving and Investing</h2>
        <div className="toggle-definitions">
          <div className="toggle-buttons">
            <p>Toggle between the 2 cards to learn more</p>
            <div className="definition-buttons">
              <button
                onClick={() => setSelected("saving")}
                className={selected !== "saving" ? "greyed-out" : " "}
              >
                Saving
              </button>
              <button
                onClick={() => setSelected("investing")}
                className={selected !== "investing" ? "greyed-out" : " "}
              >
                Investing
              </button>
            </div>
          </div>
          <div className="definitions-card">
            <h3>{content[selected].title}</h3>
            <ul>
              {content[selected].bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="investing">
          <div>
            <h2>Why consider investing?</h2>
            <p>
              Whether your goals include a family vacation, first home,
              retirement, or anything in between, investing responsibly can get
              you there much faster than by savings alone.
            </p>
            <ol>
              <li>
                <em>Potential for Long-Term Growth:</em> Investing can help your
                money grow over time through capital appreciation and
                compounding returns.
              </li>
              <li>
                <em>Build Wealth and Reach Financial Goals:</em> Investments can
                support goals such as buying a home, funding education, or
                preparing for retirement.
              </li>
              <li>
                <em>Stay Ahead of Inflation:</em> Investing may help your money
                maintain or increase its purchasing power by outpacing inflation
                over the long term.
              </li>
            </ol>
          </div>
          <div className="investing-checkbox">
            <h3>Discover Important Investing Concepts</h3>
            <div className="check">
              <label>
                <input
                  name="affordInvest"
                  type="checkbox"
                  checked={checklist.affordInvest}
                  onChange={() =>
                    handleChange("affordInvest", !checklist.affordInvest)
                  }
                />
                Invest What's Left
              </label>
              <div>
                <p>
                  If your essentials are covered, you may be ready to start
                  investing toward your future.
                </p>
              </div>
            </div>
            <div className="check">
              <label>
                <input
                  name="diversifyInvest"
                  type="checkbox"
                  checked={checklist.diversifyInvest}
                  onChange={() =>
                    handleChange("diversifyInvest", !checklist.diversifyInvest)
                  }
                />
                Diversifying Your Investments
              </label>
              <div>
                <p>
                  Diversify across assets, industries, and regions to reduce
                  risk.
                </p>
              </div>
            </div>
            <div className="check">
              <label>
                <input
                  name="investLong"
                  type="checkbox"
                  checked={checklist.investLong}
                  onChange={() =>
                    handleChange("investLong", !checklist.investLong)
                  }
                />
                Investing For the Long-term
              </label>
              <div>
                <p>
                  Invest for the long term to benefit from growth over time.
                </p>
              </div>
            </div>
            <div className="check">
              <label>
                <input
                  name="understandRisk"
                  type="checkbox"
                  checked={checklist.understandRisk}
                  onChange={() =>
                    handleChange("understandRisk", !checklist.understandRisk)
                  }
                />
                Understanding Risk and Returns
              </label>
              <div>
                <p>
                  Understand your risk profile to balance potential rewards and
                  losses.
                </p>
              </div>
            </div>
            <div className="check">
              <label>
                <input
                  name="understandInvest"
                  type="checkbox"
                  checked={checklist.understandInvest}
                  onChange={() =>
                    handleChange(
                      "understandInvest",
                      !checklist.understandInvest,
                    )
                  }
                />
                Understanding Investments
              </label>
              <div>
                <p>Understand the growth, costs, and risks before investing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
