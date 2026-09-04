import { useState } from "react";

import Header from "./components/Header.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import Navigation from "./components/NavigationButton.jsx";

import Welcome from "./components/Welcome.jsx";
import SavingInvesting from "./components/SavingInvesting.jsx";
import InvestmentJourney from "./components/InvestmentJourney.jsx";
import InvestSafely from "./components/InvestSafely.jsx";
import Introduction from "./components/Introduction.jsx";
import Summary from "./components/Summary.jsx";

export default function App() {
  const [checklist, setChecklist] = useState({
    affordInvest: false,
    diversifyInvest: false,
    investLong: false,
    understandRisk: false,
    understandInvest: false,
  });

  const sections = [
    <Introduction />,
    <Welcome />,
    <SavingInvesting checklist={checklist} setChecklist={setChecklist} />,
    <InvestmentJourney />,
    <InvestSafely />,
    <Summary checklist={checklist} />,
  ];

  const [currentSection, setCurrentSection] = useState(0);

  return (
    <main className="investor-guide">
      <section>
        <Header />
        <ProgressBar
          currentSection={currentSection}
          totalSections={sections.length}
        />
        <div className="content-wrapper">{sections[currentSection]}</div>
        <Navigation
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          totalSections={sections.length}
        />
      </section>
    </main>
  );
}
