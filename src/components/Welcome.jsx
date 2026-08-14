import { useState } from "react"

export default function Welcome() {
  const [checklist, setChecklist] = useState({
    hasSin: false,
    hasBankAccount: false,
  })

  const handleChange = (field, value) => {
    setChecklist((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <>
      <section className="welcome">
        <h2>What you’ll need to get started</h2>
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
            <p>
              If you want to work, get paid, or invest in Canada you will need
              to apply for a SIN through the Government of Canada.
            </p>
            <p>It’s free and you don’t even need to be a citizen.</p>
            <p>
              Learn more about applying for a{" "}
              <a href="https://www.canada.ca/en/employment-social-development/services/sin/apply.html">
                Social Insurance Number
              </a>
            </p>
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
            <p>
              Canada has an incredibly reliable and safe banking system. Who you
              open an account with is up to you and the Government of Canada has
              information to help you get started.
            </p>
            <p>It’s free and you don’t even need to be a citizen.</p>
            <p>
              Learn more about opening a{" "}
              <a href="https://www.canada.ca/en/financial-consumer-agency/services/banking/opening-bank-account.html">
                Canadian Bank Account
              </a>
            </p>
          </div>
        </section>
      </section>
    </>
  )
}
