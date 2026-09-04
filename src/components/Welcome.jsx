import { useState } from "react";

export default function Welcome() {
  const [checklist, setChecklist] = useState({
    hasSin: false,
    hasBankAccount: false,
  });

  const handleChange = (field, value) => {
    setChecklist((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <section className="welcome">
        <h2>What you’ll need to get started</h2>
        <p>Select the following items you currently have set up:</p>
        <section>
          <div className="check">
            <label>
              <input
                name="sin"
                type="checkbox"
                checked={checklist.hasSin}
                onChange={() => handleChange("hasSin", !checklist.hasSin)}
              />
              Social Insurance Number (SIN)
            </label>
          </div>
          <div className="description">
            <ul>
              <li>This is needed to work, get paid, or invest in Canada.</li>
              <li>It’s free and you don’t even need to be a citizen.</li>
              <li>
                Learn more about applying for a{" "}
                <a href="https://www.canada.ca/en/employment-social-development/services/sin/apply.html">
                  Social Insurance Number
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="check">
            <label>
              <input
                name="bank"
                type="checkbox"
                checked={checklist.hasBankAccount}
                onChange={() =>
                  handleChange("hasBankAccount", !checklist.hasBankAccount)
                }
              />
              Bank Account
            </label>
          </div>
          <div className="description">
            <ul>
              <li>
                Explore and compare the best{" "}
                <a href="https://www.ratehub.ca/chequing-accounts/accounts/personal">
                  Personal Chequing Accounts
                </a>
                &nbsp;in Canada
              </li>
              <li>
                Learn more about opening a{" "}
                <a href="https://www.canada.ca/en/financial-consumer-agency/services/banking/opening-bank-account.html">
                  Canadian Bank Account
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
}
