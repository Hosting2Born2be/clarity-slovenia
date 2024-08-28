"use client";
import "@/styles/header.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };
  const closeMenu = () => {
    document.body.classList.toggle("no-scroll", !menuOpened);
    setMenuOpened(false);
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <>
      <div className={`head-wrap ${menuOpened && "fixed"}`}>
        <div className={`sticky-head ${menuOpened && "fixed"}`}>
          <header>
            <div className="_container">
              <div className="header-wrap">
                <Link href="/" className="logo" aria-label="Logo">
                  <img src="/images/logo.svg" alt="Logo" />
                </Link>

                <nav className={menuOpened && "opened"}>
                  <Link href="#send-money" onClick={() => closeMenu()}>
                    Send Money
                  </Link>
                  <Link href="#receive-money" onClick={() => closeMenu()}>
                    Receive Money
                  </Link>
                  <Link href="#" onClick={() => closeMenu()}>
                    Virtual Card
                  </Link>
                  <Link href="how-it-works" onClick={() => closeMenu()}>
                    How It works
                  </Link>
                  <Link href="#" onClick={() => closeMenu()}>
                    About Us
                  </Link>
                  <Link href="#contact-us" onClick={() => closeMenu()}>
                    Contact Us
                  </Link>
                </nav>

                <span
                  className={`mobile-menu-btn ${menuOpened ? "opened" : ""}`}
                  onClick={handleMenu}
                >
                  <div>
                    <span className="squere"></span>
                    <span className="vertical"></span>
                    <span className="squere"></span>
                    <span className="horizontal"></span>
                    <span className="squere"></span>
                    <span className="vertical"></span>
                    <span className="squere"></span>
                  </div>
                </span>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
