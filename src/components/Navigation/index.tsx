import Link from "next/link";
import Image from "next/image";
import Style from "../../styles/Home.module.css";

export default function Navigation() {
  return (
    <nav className="navbar bg-darkest border-5 fixed-top container">
        <div id={Style.navbarBrand} className="mt-4">
            <a className="navbar-brand" href={'/'}>Naufal Fadhil</a>
        </div>
        <div id={Style.longNavigation} className="me-5 text-center">
            <ul className="nav mt-3" >
                <li className="nav-item px-3">
                  <Link href="/article">
                      <div className="nav-link">ARTICLE</div>
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link href="/certificate">
                      <div className="nav-link">CERTIFICATE</div>
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link href="/project">
                      <div className="nav-link">PROJECT</div>
                  </Link>
                </li>
            </ul>
        </div>
        <div id={Style.shortNavigation}>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <img src="assets/images/logo/logo-home.svg" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="articles/">
                        <img src="assets/images/logo/logo-blog.svg" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="certificates/"><img src="assets/images/logo/logo-certificate.svg" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="projects/"><img src="assets/images/logo/logo-project.svg" /></a>
                </li>
            </ul>
        </div>
        <div id={Style.navbarLogo}>
            <Image src="assets/images/logo/N22-Logo-Primary.svg" width={30} height={30} alt="N Logo" className="mt-3 me-4" />
        </div>
    </nav>
  )
}
