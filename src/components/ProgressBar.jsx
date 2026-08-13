import { useEffect, useState } from "react"

export default function ProgressBar({ currentSection, totalSections }) {
  const progress = (currentSection / (totalSections - 1)) * 100

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  )
}
