import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="nav-down headerNew" id="main-header">
      <div className="headerWrapper">
        <div className="leftMenu">
          <ul>
            <li className="menuLinks">
              <Link href={"/signature-philosophy"}>Philosophy</Link>
            </li>
            <li className="menuLinks">
              <Link href={"/signature-essence"}>Essence</Link>
            </li>
          </ul>
        </div>
        <div className="centerLogo">
          <Link href={"/"}>
            <Image
              className="headerLogo"
              src="/images/headerlogo.svg"
              alt="logo"
              width={0}
              height={0}
              priority
            />
          </Link>
        </div>
        <div className="rightMenu">
          <ul>
            <li className="menuLinks">
              <Link href={"/"}>Residences</Link>
            </li>
            <li className="menuLinks">
              <Link href={"/"}>Experience</Link>
            </li>
            <li>
              <div className="hamburgerDiv" id="hamburgerDiv">
                <div className="button_container" id="toggle">
                  <span className="top"></span>
                  <span className="bottom"></span>
                </div>
                <div className="centerLogo">
                  <Link href={"/"}>
                    <Image
                      className="headerLogo"
                      src="/images/headerlogo.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      priority
                    />
                  </Link>
                </div>
                <div className="rightMenu">
                  <ul>
                    <li className="menuLinks">
                      <Link href={"/"}>Residences</Link>
                    </li>
                    <li className="menuLinks">
                      <Link href={"/"}>Experience</Link>
                    </li>
                    <li>
                      <div className="hamburgerDiv" id="hamburgerDiv">
                        <div className="button_container" id="toggle">
                          <span className="top"></span>
                          <span className="bottom"></span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="overlay" id="overlay">
                <div className="popupmenuLogo">
                  <Link href={"/"}>
                    <img src="/images/headerlogo.svg" alt="" title="" />
                  </Link>
                </div>
                <button className="closeButtonmenu">
                  <img src="/images/popup-close-icon.svg" alt="" title="" />
                </button>
                <nav className="overlay-menu">
                  <ul>
                    <li className="menuLinks">
                      <Link href={"/"}>Signature Philosophy</Link>
                    </li>
                    <li className="menuLinks">
                      <Link href={"/"}>Signature Essence</Link>
                    </li>
                    <li className="menuLinks">
                      <Link href={"/"}>Signature Residences</Link>
                    </li>
                    <li className="menuLinks">
                      <Link href={"/"}>Signature Experience</Link>
                    </li>
                    <li className="menuLinks dropdownMenu">
                      <a>
                        Our Collection
                        <img
                          src="/images/header-mbl-dropdown-arrow.svg"
                          alt=""
                          title=""
                        />
                      </a>
                      <div className="dropdownMbl">
                        <ul>
                          <li>
                            <Link href={"/"}>Oceana, Prabhadevi</Link>
                          </li>
                          <li>
                            <Link href={"/"}>Azuro, Nepean Sea Road</Link>
                          </li>
                          <li>
                            <Link href={"/"}>Prive, Altamount Road</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <div className="headerminiLinks">
                    <Link href={"/"}>News & Media</Link>
                    <a className="trigger reqCta ctaBluetext">
                      Request a Private Preview{" "}
                      <img src="/images/req-arrow.svg" />
                    </a>
                  </div>
                </nav>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
