import Link from "next/link";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="home-how">
      <div className="_container">
        <div className="home-how__body">
          <div className="home-how__col-01 fadeInUp">
            <div>
              <h2 className="">How it works</h2>
              <p className="">
                Getting started with Clarity <br />
                Global is simple. Follow these <br />
                easy steps to begin managing <br />
                your global payments:
              </p>
            </div>
            <Link href="#" className="orange-button ">
              Explore More
            </Link>
          </div>
          <div className="home-how__col-02 fadeInUp">
            <div className="row">
              <div class="how-element ">
                <span>1</span>
                <h3>Sign Up</h3>
                <p>
                  Register for a Clarity Global account. The process is quick
                  and easy—just fill out the required information.{" "}
                  <b>It is free.</b>
                </p>
              </div>
              <div class="how-element ">
                <span>2</span>
                <h3>Verify Your Account</h3>
                <p>
                  Complete the verification adding documents. This ensures that
                  your account is secure and ready to use.
                  <b>It takes 3 minutes.</b>
                </p>
              </div>
              <div class="how-element ">
                <span>3</span>
                <h3>Start Your Journey</h3>
                <p>
                  Once your account is approved, you can send and receive
                  payments worldwide or access virtual cards for your needs.{" "}
                  <b>Let's try!</b>
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

export default HowItWorks;
