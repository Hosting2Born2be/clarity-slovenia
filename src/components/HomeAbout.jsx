import React from "react";

const HomeAbout = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="_container">
        <div className="about-us__body">
          <div className="top">
            <h2 className="fadeInUp">
              GET TO KNOW <br />
              CLARITY GLOBAL
            </h2>
            <div className="wrap">
              <div className="item fadeInUp">
                <span></span>
                <div>
                  <h3>OUR MISSION</h3>
                  <p>
                    Clarity Global is dedicated to transforming the way people
                    handle money across borders. Our mission is to provide
                    seamless, secure, and innovative financial solutions that
                    cater to both individuals and businesses, making global
                    transactions simpler and more efficient.
                  </p>
                </div>
              </div>
              <div className="item fadeInUp">
                <span></span>
                <div>
                  <h3>OUR NEW OFFICE IN SLOVENIA</h3>
                  <p>
                    We're excited to announce the opening of our representative
                    office in Slovenia, extending our global presence.F
                  </p>
                </div>
              </div>
              <div className="item fadeInUp">
                <span></span>
                <div>
                  <h3>OUR GLOBAL REACH</h3>
                  <p>
                    With a presence in over 180 countries, Clarity Global
                    connects you to a vast financial services network. Whether
                    you're sending money, receiving payments, or managing
                    virtual cards, we are here to support your global financial
                    needs with reliability and expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <span>OUR VALUES</span>
            <div className="row">
              <div className="fadeInUp">
                <h3>Transparency:</h3>
                <p>
                  We believe in clear and honest communication with our clients,
                  ensuring no hidden fees and straightforward processes.
                </p>
              </div>
              <div className="fadeInUp">
                <h3>Innovation:</h3>
                <p>
                  We continually strive to enhance our services with
                  cutting-edge technology to stay ahead in the evolving
                  financial landscape.
                </p>
              </div>
              <div className="fadeInUp">
                <h3>Customer Focus:</h3>
                <p>
                  Your satisfaction is our priority. We are committed to
                  delivering exceptional service and support, tailored to your
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
