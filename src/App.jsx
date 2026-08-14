import { useState } from "react"

import Header from "./components/Header.jsx"
import ProgressBar from "./components/ProgressBar.jsx"
import Navigation from "./components/NavigationButton.jsx"

import Welcome from "./components/Welcome.jsx"
import SavingInvesting from "./components/SavingInvesting.jsx"
import InvestmentJourney from "./components/InvestmentJourney.jsx"
import InvestSafely from "./components/InvestSafely.jsx"
import Introduction from "./components/Introduction.jsx"

export default function App() {
  const sections = [
    <Introduction />,
    <Welcome />,
    <SavingInvesting />,
    <InvestmentJourney />,
    <InvestSafely />,
  ]

  const [currentSection, setCurrentSection] = useState(0)

  return (
    <>
      <section>
        <ProgressBar
          currentSection={currentSection}
          totalSections={sections.length}
        />
        <Header />
        {sections[currentSection]}
        <Navigation
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          totalSections={sections.length}
        />
      </section>
    </>
  )
}
