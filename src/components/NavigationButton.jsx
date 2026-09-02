export default function NavigationButton({
  currentSection,
  setCurrentSection,
  totalSections,
}) {
  return (
    <div className="navigation">
      {currentSection > 0 && (
        <button
          className="nav-button nav-button--previous"
          onClick={() => setCurrentSection(currentSection - 1)}
          aria-label="Previous Section"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {currentSection !== totalSections - 1 && (
        <button
          className={`nav-button nav-button--next ${
            currentSection === 0 ? "nav-button--start" : ""
          }`}
          onClick={() => setCurrentSection((prev) => prev + 1)}
          aria-label={currentSection === 0 ? "Get Started" : "Next Section"}
        >
          {currentSection === 0 ? (
            "Get Started"
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          )}
        </button>
      )}
    </div>
  )
}
