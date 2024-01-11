import React from "react";

const About = () => {
  return (
    <div>
      {/*<!-- about jc of mobile-->*/}
      <section className="about d-md-none">
        <div className="container">
          <h2>
            <span>
              <img src="/images/footprint.png" alt="before" />
            </span>
            About
            <span>
              <img src="/images/footprint.png" alt="" />{" "}
            </span>
          </h2>
          <div className="card align-items-center text-center">
            <img
              src="/images/about JC1.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Fresh Ingredient</h5>
              <p className="card-text">
                we purchase ingredient every day to make fresh and healthy food
                for our pet.
              </p>
            </div>
          </div>
          <div className="card align-items-center text-center">
            <img src="/images/about2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Without adding any preservatives.</h5>
              <p className="card-text">
                we carefully studies recipes, aiming to create fresh pet food
                without adding preservatives. The goal is to promote longevity
                for the our furry companions!
              </p>
            </div>
          </div>
          <div className="card align-items-center text-center">
            <img
              src="/images/about JC3.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">handmade Limited</h5>
              <p className="card-text">
                Limited quantities.
                <br />
                Fresh ingredients undergo thorough high-temperature
                sterilization and baking for over 12 hours
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*<!--about jc of md&lg -->*/}
      <section className="about-lg container d-none d-md-block">
        <h2 className="text-center" data-aos="zoom-in" data-aos-duration="1200">
          <span>
            <img src="/images/footprint.png" alt="before" />
          </span>
          about
          <span>
            <img src="/images/footprint.png" alt="" />
          </span>
        </h2>
        <div className="aboutCard">
          <div
            className="card-body1"
            data-aos="zoom-in-left"
            data-aos-duration="1300"
          >
            <img className="aboutImg1" src="/images/about JC1.png" alt="" />
            <div className="card-title">
              <h3>Fresh Ingredient</h3>
            </div>
            <p className="card-text">
              we purchase ingredient every day to make fresh and healthy food
              for our pet.
            </p>
          </div>
        </div>
        <div className="aboutCard">
          <div
            className="card-body2"
            data-aos="zoom-in-right"
            data-aos-duration="1400"
          >
            <img className="aboutImg2" src="/images/about2.jpg" alt="" />
            <div className="card-title">
              <h3>Without adding any preservatives.</h3>
            </div>
            <p className="card-text">
              we carefully studies recipes, aiming to create fresh pet food
              without adding preservatives. The goal is to promote longevity for
              the our furry companions!
            </p>
          </div>
        </div>
        <div className="aboutCard">
          <div
            className="card-body3"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img className="aboutImg3" src="/images/about JC3.png" alt="" />
            <div className="card-title">
              <h3>handmade limit</h3>
            </div>
            <p className="card-text">
              Handcrafted in limited quantities. Fresh ingredients undergo
              thorough high-temperature sterilization and baking for over
            </p>
          </div>
        </div>
      </section>
      {/*!-- -------end of about------- --*/}
    </div>
  );
};

export default About;
