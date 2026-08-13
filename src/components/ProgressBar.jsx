import { useEffect, useState } from "react"

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress = (scrollTop / documentHeight) * 100

      setScrollProgress(progress)
    }

    /* waits for scroll event to update */
    window.addEventListener("scroll", updateProgress)

    /* unmounts the scroll eventListener */
    return () => {
      window.removeEventListener("scroll", updateProgress)
    }
  }, [])

  return (
    <>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </>
  )
}
