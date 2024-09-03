import Link from "next/link";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="home-how" id="how-it-works">
      <div className="_container">
        <div className="home-how__body">
          <div className="home-how__col-01 fadeInUp">
            <div>
              <h2 className="">How it works</h2>
              <p className="">
                Starting with Clarity Global is easy. Just follow these steps to
                manage your global business payments:
              </p>
            </div>
            <Link href="#send-money" className="orange-button ">
              Explore More
            </Link>
          </div>
          <div className="home-how__col-02 fadeInUp">
            <div className="row">
              <div class="how-element ">
                <span>1</span>
                <h3>Sign Up</h3>
                <p>
                  Sign up for your account. The registration process is simple
                  —complete the required business details.{" "}
                  <b>Registration is free.</b>
                </p>
              </div>
              <div class="how-element ">
                <span>2</span>
                <h3>Verify Your Account</h3>
                <p>
                  Complete verification by adding documents. This secures your
                  business and prepares it for use. <b>It takes 3 minutes.</b>
                </p>
              </div>
              <div class="how-element ">
                <span>3</span>
                <h3>Start Your Journey</h3>
                <p>
                  Once your account is approved, you can send and receive
                  payments globally or access virtual cards for your operations.{" "}
                  <b>Get started now!</b>
                </p>
              </div>
            </div>
          </div>
          <Link href="#send-money" className="orange-button fadeInUp dt-hidden">
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
