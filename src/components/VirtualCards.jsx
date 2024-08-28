import Link from "next/link";
import React from "react";

const VirtualCards = () => {
  return (
    <section className="virtual-cards" id="virtual-cards">
      <div className="_container">
        <div className="virtual-cards__body">
          <span className="highlight fadeInUp">OUR VIRTUAL CARDS</span>
          <h2 className="fadeInUp">
            Discover the convenience of <br />
            Clarity Global's virtual cards:
          </h2>
          <div className="wrap">
            <div className="item fadeInUp">
              <span></span>
              <div>
                <h3>Instant Access</h3>
                <p>
                  Get your virtual card quickly without waiting <br/>
                  for physical
                  delivery. Then, start using it for <br/>
                  online transactions right
                  away.
                </p>
              </div>
            </div>
            <div className="item fadeInUp">
              <span></span>
              <div>
                <h3>Full Online Management</h3>
                <p>
                  Easily control your virtual card settings through our online<br/>
                  platform. Monitor transactions, adjust limits, and manage <br/>your
                  card all in one place.
                </p>
              </div>
            </div>
            <div className="item fadeInUp">
              <span></span>
              <div>
                <h3>Enhanced Security</h3>
                <p>
                  Enjoy peace of mind with virtual cards with robust security
                  features, protecting <br/>your financial information during online
                  transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualCards;
