import Image from "next/image";
import Link from "next/link";
import { ImageResponse } from "next/server";
import React from "react";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="_container">
        <div className="home-hero__body">
          <div>
            <h1 className="fadeInUp">
              Clarity Global: Your Smart <br />
              Electronic Money Solution
            </h1>
            <p className="fadeInUp">Manage Global Payments with Ease</p>
            <ul>
                <li>
                    <img src="/images/home/arrow.svg" alt="arrow" />
                    <span>Send and Receive Money</span>
                </li>
                <li>
                    <img src="/images/home/arrow.svg" alt="arrow" />
                    <span>Order and Manage Virtual Cards</span>
                </li>
                <li>
                    <img src="/images/home/arrow.svg" alt="arrow" />
                    <span>Cover All Business Payment Needs</span>
                </li>
            </ul>
            <Link href="#how-it-works" className="white-button">
              Let's Start
            </Link>
          </div>
          <Image src="/images/hero.png" width={540} height={465} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
