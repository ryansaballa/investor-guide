import Header from "./components/Header.jsx"
import Welcome from "./components/Welcome.jsx"
import SavingInvesting from "./components/SavingInvesting.jsx"
import InvestmentJourney from "./components/InvestmentJourney.jsx"
import InvestSafely from "./components/InvestSafely.jsx"
import ProgressBar from "./components/ProgressBar.jsx"

export default function App() {
  return (
    <>
      <ProgressBar />
      <Header />
      <Welcome />
      <SavingInvesting />
      <InvestmentJourney />
      <InvestSafely />
    </>
  )
}
