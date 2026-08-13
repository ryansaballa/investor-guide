export default function NavigationButton({
  currentSection,
  setCurrentSection,
  totalSections,
}) {
  return (
    <div>
      <button
        disabled={currentSection === 0}
        onClick={() => setCurrentSection((prev) => prev - 1)}
      >
        Previous
      </button>
      <button
        disabled={currentSection === totalSections - 1}
        onClick={() => setCurrentSection((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  )
}
