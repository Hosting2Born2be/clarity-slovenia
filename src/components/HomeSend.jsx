import Link from "next/link";
import React from "react";

const HomeSend = () => {
  return (
    <section className="send-money" id="send-money">
      <div className="_container">
        <div className="send-money__body">
          <span className="highlights fadeInUp">HOW TO SEND MONEY</span>
          <h2 className="fadeInUp">
            Clarity Global makes international business payments simple and
            efficient. <br />
            Follow these steps to transfer funds easily:
          </h2>
          <div className="wrap">
            <div className="item fadeInUp">
              <span></span>
              <div>
                <h3>Quick Setup</h3>
                <p>
                  Set up your Clarity Global account in just a few simple steps.
                  After registration and verification, you'll be ready to handle
                  global transactions.
                </p>
              </div>
            </div>
            <div className="item fadeInUp">
              <span></span>
              <div>
                <h3>Quick Transfers</h3>
                <p>
                  Experience speedy international payments. Clarity Global's
                  system guarantees your business funds arrive at their
                  destination in minutes.
                </p>
              </div>
            </div>
            <div className="item fadeInUp">
              <span></span>
              <div>
                <h3>Transparent Pricing</h3>
                <p>
                  Clarity Global offers low, transparent fees. Our competitive
                  rates allow your business to transfer funds affordably without
                  hidden costs.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="https://clarityglobalinc.com/send.html"
            target="_blank"
            className="orange-button"
          >
            Send Money
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSend;
