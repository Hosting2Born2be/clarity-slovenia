import Link from "next/link";
import React from "react";

const HomeSend = () => {
  return (
    <section className="send-money" id="send-money">
      <div className="_container">
        <div className="send-money__body">
          <span className="highlights fadeInUp">HOW TO SEND MONEY</span>
          <h2 className="fadeInUp">
            Sending money globally with Clarity Global is straightforward and
            efficient.
            <br />
            Here's how you can easily transfer funds:
          </h2>
          <div className="wrap">
            <div className="item fadeInUp">
              <span></span>
              <div>
                <h3>Easy Setup</h3>
                <p>
                  Create an account with Clarity Global in just a few simple
                  steps. Once registered and verified, you're ready to start
                  sending money.
                </p>
              </div>
            </div>
            <div className="item fadeInUp">
              <span></span>
              <div>
                <h3>Fast Transfers</h3>
                <p>
                  Enjoy quick international transfers. Our system ensures that
                  your money reaches its destination in minutes.
                </p>
              </div>
            </div>
            <div className="item fadeInUp">
              <span></span>
              <div>
                <h3>Competitive Fees</h3>
                <p>
                  Benefit from transparent and low fees. Our competitive rates
                  mean you can send money affordably without hidden costs.
                </p>
              </div>
            </div>
          </div>
          <Link href="https://clarityglobalinc.com/send.html" target="_blank" className="orange-button">Send Money</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSend;
