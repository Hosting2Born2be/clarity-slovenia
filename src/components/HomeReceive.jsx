import Link from "next/link";
import React from "react";

const HomeReceive = () => {
  return (
    <section className="home-receive" id="receive-money">
      <div className="_container">
        <div className="home-receive__body">
          <div className="home-receive__col-01 fadeInUp">
            <div>
              <h2 className="small">
                HOW TO <br />
                RECEIVE <br />
                MONEY
              </h2>
              <p className="">
                With Clarity Global, receiving payments is straightforward and
                intuitive:
              </p>
            </div>
            <Link href="#" className="orange-button ">
              Receive Money
            </Link>
          </div>
          <div className="home-receive__col-02 fadeInUp">
            <div className="row">
              <div class="how-element ">
                <span>1</span>
                <h3>Simple Process</h3>
                <p>
                  Receiving payments is effortless. Once your account is set up
                  and verified, you can receive global payments with just a few
                  clicks.
                </p>
              </div>
              <div class="how-element ">
                <span>2</span>
                <h3>Safe Transactions</h3>
                <p>
                  Rest assured that your business payments are secure. Our
                  top-tier technology ensures all funds are handled with the
                  highest level of protection.
                </p>
              </div>
              <div class="how-element ">
                <span>3</span>
                <h3>Global Reach</h3>
                <p>
                  Accept payments from over 180 countries. Our extensive global
                  network enables your business to receive funds from anywhere,
                  making international transactions seamless.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="https://clarityglobalinc.com/receive.html"
            target="_blank"
            className="orange-button fadeInUp dt-hidden"
          >
            Receive Money
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeReceive;
