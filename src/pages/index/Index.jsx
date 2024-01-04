import About from "./About";

function Index() {
  return (
    <>
      <section className="banner">
        <div className="container position-relative">
          {/* <!-- slogan --> */}
          <div className="slogan d-none d-md-block">
            <div>
              <p className="animate__animated animate__slideInRight animate__slower">
                100% nature・no chemical
              </p>
              <h2>Homemade pet's snacks</h2>
              <span> Limited Quantity</span>
              <span>
                <img src="/images/footprint.png" alt="" />
                picker
              </span>
              <span>
                <img src="/images/footprint.png" alt="" />
                the best
              </span>
            </div>
            {/* <!-- big foot print --> */}
            <div className="d-sm-none d-lg-block">
              <span className="footprintBig footprintBig1 position-absolute">
                <img src="/images/footprint.png" alt="" />
              </span>
              <span className="footprintBig footprintBig2 position-absolute">
                <img src="/images/footprint.png" alt="" />
              </span>
            </div>
          </div>

          {/* <!-- dog picture --> */}
          <div>
            <img
              className="bannerDogFrameOrange position-absolute"
              src="/images/bannerDogFrameOrange.png"
              alt=""
            />
            <img
              className="bannerDog position-absolute"
              src="/images/bannerDog.png"
              alt="bannerDog"
            />
            <img
              className="bannerDogWhiteFrame position-absolute"
              src="/images/bannerDogframe.png"
              alt=""
            />
          </div>
          {/* <!-- cat picture --> */}
          <div>
            <img
              className="bannerCatFrame position-absolute"
              src="/images/bannerCatFame.png"
              alt="bannerCatFrame"
            />
            <img
              className="bannerCat position-absolute"
              src="/images/bannercat.png"
              alt="bannercat"
            />
          </div>
          {/* <!-- footprint --> */}
          <div>
            <span>
              <img
                className="footprint footprint1 d-md-none position-absolute"
                src="/images/footprint.png"
                alt="footprint"
              />
            </span>
            <span>
              <img
                className="footprint footprint2 d-md-none position-absolute"
                src="/images/footprint.png"
                alt="footprint"
              />
            </span>
            <span className="d-none d-md-block">
              <img
                className="footprint footprint3 rotate d-md-none position-absolute"
                src="/images/footprint.png"
                alt="footprint"
              />
            </span>
            <span className="d-none d-md-block">
              <img
                className="footprint footprint4 rotate position-absolute animate__delay-5s animate__animated animate__flash"
                src="/images/footprint.png"
                alt="footprint"
              />
            </span>
            <span className="d-none d-md-block">
              <img
                className="footprint footprint5 rotate position-absolute animate__delay-4s animate__animated animate__flash"
                src="/images/footprint.png"
                alt="footprint"
              />
            </span>
            <span className="d-none d-md-block">
              <img
                className="footprint footprint6 rotate position-absolute animate__delay-3s animate__animated animate__flash"
                src="/images/footprint.png"
                alt="footprint"
              />
            </span>
          </div>
        </div>
      </section>
      {/* <!-- banner of mobil slogan --> */}
      <section className="slogan-sm d-sm-block d-md-none">
        <div className="slogan container">
          <div>
            <p>100% Natural・Without adding any preservatives</p>
            <h2>pets snack</h2>
            <span>
              <img src="/images/footprint.png" alt="" />
              Handcrafted in limited quantities.
            </span>
            <span>
              <img src="/images/footprint.png" alt="" />
              Specially formulated for picky pets
            </span>
            <span>
              <img src="/images/footprint.png" alt="" />
              <img src="/images/footprint.png" alt="" />
              only the best for pets
              <img src="/images/footprint.png" alt="" />
            </span>
          </div>
          {/* <!-- big foot print --> */}
          <div className="d-none d-lg-block">
            <span className="footprintBig footprintBig1 position-absolute">
              <img src="/images/footprint.png" alt="" />
            </span>
            <span className="footprintBig footprintBig2 position-absolute">
              <img src="/images/footprint.png" alt="" />
            </span>
          </div>
        </div>
      </section>
      <About />
    </>
  );
}
export default Index;
