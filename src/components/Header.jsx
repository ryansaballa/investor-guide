import Logo from "../assets/CIRO-main-logo.svg"

export default function Header() {
  return (
    <>
      <header>
        <section>
          <div>
            <img className="logo" src={Logo} />
          </div>
          <div>
            <h1>A Guide to Investing for Newcomers to Canada</h1>
          </div>
        </section>
      </header>
    </>
  )
}
