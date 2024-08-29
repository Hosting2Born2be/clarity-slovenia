import "@/styles/footer.scss";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="_container">
        <div className="foot-top">
          <Link href="/">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>
          <span>
            Smart Electronic Money Solutions for Business and Individuals.
          </span>
        </div>
        <div className="foot-row">
          <div>
            <h3>Menu</h3>
            <ul>
              <li>
                <Link href="#send-money">Send Money</Link>
              </li>
              <li>
                <Link href="#receive-money">Receive Money</Link>
              </li>
              <li>
                <Link href="#virtual-cards">Virtual Cards</Link>
              </li>
              <li>
                <Link href="#how-it-works">How It works</Link>
              </li>
              <li>
                <Link href="#about-us">About Us</Link>
              </li>
              <li>
                <Link href="#contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="https://clarityglobalinc.com/faq.html" target="_blank">FAQ</Link>
              </li>
              <li>
                <Link href="https://clarityglobalinc.com/help.html" target="_blank">Help</Link>
              </li>
              <li>
                <Link href="https://clarityglobalinc.com/newsletter.html" target="_blank">Newsletter</Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h3>Representation office address:</h3>
              <span>Gosposvetska cesta 5, 1000 Ljubljana, Slovenia</span>
              <h3>Clarity Global SP</h3>
            </div>
            <div>
              <h3>Phone:</h3>
              <Link href="tel:+38669721406">+38669721406</Link>
            </div>
            <div>
              <h3>Email:</h3>
              <Link href="mailto:info@clarityglobalinc.com">
                info@clarityglobalinc.com
              </Link>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {currentYear} Clarity Global. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
