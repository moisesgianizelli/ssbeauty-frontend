import { NavLink } from "react-router-dom";

export const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="p-5"
      style={{
        backgroundColor: "#f8f3e9", // Warm neutral bakery-inspired color
        minHeight: "100vh",
      }}
    >
      <div
        className="container py-5 text-dark d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="row w-100">
          <div
            className="col-12 col-md-10 col-lg-8 mx-auto text-center"
            style={{ padding: "0rem", marginTop: "-2rem" }}
          >
            <h1 className="display-5 fw-bold text-brown">Cameron Bakery</h1>
            <p className="fs-5">
              Welcome to Cameron Bakery, a family-owned bakery with a passion
              for creating delicious, handcrafted treats. For over 15 years, we
              have been serving our community with freshly baked goods made from
              the finest ingredients and a whole lot of love.
              <br />
              From artisan breads and decadent pastries to custom cakes for
              special occasions, we take pride in every item we make. Our
              commitment to quality, tradition, and innovation is what sets us
              apart. At Cameron Bakery, every bite tells a story.
            </p>

            <div className="col-12 text-center mt-4">
              <hr />
              <h2 className="my-4 text-brown">Our Signature Creations</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="card text-dark mb-3">
                    <img
                      src={require("./../../../Images/PublicImages/award.jpg")}
                      className="card-img-top"
                      alt="Croissant"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Butter Croissant</h5>
                      <p className="card-text">
                        Our flaky, buttery croissants are a customer favorite,
                        perfect for breakfast or a snack.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-dark mb-3">
                    <img
                      src={require("./../../../Images/PublicImages/award.jpg")}
                      className="card-img-top"
                      alt="Chocolate Cake"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Chocolate Cake</h5>
                      <p className="card-text">
                        Decadent, rich, and indulgent, our chocolate cake is
                        perfect for every celebration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-dark mb-3">
                    <img
                      src={require("./../../../Images/PublicImages/award.jpg")}
                      className="card-img-top"
                      alt="Chocolate Cake"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Chocolate Cake</h5>
                      <p className="card-text">
                        Decadent, rich, and indulgent, our chocolate cake is
                        perfect for every celebration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-dark mb-3">
                    <img
                      src={require("./../../../Images/PublicImages/award.jpg")}
                      className="card-img-top"
                      alt="Chocolate Cake"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Chocolate Cake</h5>
                      <p className="card-text">
                        Decadent, rich, and indulgent, our chocolate cake is
                        perfect for every celebration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-dark mb-3">
                    <img
                      src={require("./../../../Images/PublicImages/award.jpg")}
                      className="card-img-top"
                      alt="Chocolate Cake"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Chocolate Cake</h5>
                      <p className="card-text">
                        Decadent, rich, and indulgent, our chocolate cake is
                        perfect for every celebration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-dark mb-3">
                    <img
                      src={require("./../../../Images/PublicImages/award.jpg")}
                      className="card-img-top"
                      alt="Artisan Bread"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Artisan Bread</h5>
                      <p className="card-text">
                        Baked fresh daily, our artisan bread is made with
                        simple, wholesome ingredients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#menu"
              className="btn main-color btn-lg btn-outline-dark mt-3"
              style={{ width: "200px" }}
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
