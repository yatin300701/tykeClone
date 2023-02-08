import { Link } from "@remix-run/react";
// import styles from  "~/styles/Navbar.css"

export default function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="logo "><img src="https://ds0zssdpdgkzg.cloudfront.net/Logos/Logo_with_text.svg" className="logoimg" alt="Logo"/> </div>
            <ul className="navbar-links">
                <Link className="links" to="/">Home</Link>
                <Link className="links"  to="/startup">Startup</Link>
                <Link className="links" to="/tykeAcademy">TykeAcademy</Link>
                <Link className="links" to="/partnership">Partnership</Link>
                <Link className="links" to="/aboutus">AboutUs</Link>
            </ul>
            <ul className="registerUser">
                <button className="links-login">Sign In</button>
                <button className="links-start"> Get Started</button>
            </ul>
        </nav>
    </>
  )
}
