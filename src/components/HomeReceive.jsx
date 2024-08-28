import Link from "next/link";
import React from "react";

const HomeReceive = () => {
  return (
    <section className="home-receive" id="home-receive">
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
                  Getting paid is hassle-free. Once your account is set up and
                  verified, you can receive payments worldwide with just a few
                  clicks.
                </p>
              </div>
              <div class="how-element ">
                <span>2</span>
                <h3>Secure Transactions</h3>
                <p>
                  Rest assured that your transactions are protected. We use
                  industry-leading technology to ensure that all funds are
                  received securely.
                </p>
              </div>
              <div class="how-element ">
                <span>3</span>
                <h3>Global Reach</h3>
                <p>
                  Receive payments from over 180 countries. Our global network
                  means you can accept money from anywhere, making international
                  transactions seamless.
                </p>
              </div>
            </div>
          </div>
          <Link href="#" className="orange-button fadeInUp dt-hidden">
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeReceive;
