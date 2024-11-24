import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const ExploreTopOptions = () => {
  return (
    <div
      className="p-5 text-white"
      style={{
        backgroundImage: `url(${require("./../../../Images/PublicImages/award.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <div
        className="container-fluid py-5 d-flex justify-content-center align-items-center"
        style={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="row w-100 text-center">
          <div className="col-md-12">
            <h1 className="display-4 fw-bold">Welcome to Cameron Bakery</h1>
            <p className="fs-4">
              Freshly baked goods crafted with love daily. Explore our menu and
              specials!
            </p>
            <div className="mt-4">
              <ul className="social list-inline">
                <li className="list-inline-item">
                  <a href="https://wa.me/5511950424351" className="icon brands">
                    <FontAwesomeIcon icon={faWhatsapp as any} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/suyenebeauty/"
                    className="icon brands"
                  >
                    <FontAwesomeIcon icon={faInstagram as any} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/share/rBrQh1qUiAjGHF6Q/?mibextid=LQQJ4d"
                    className="icon brands"
                  >
                    <FontAwesomeIcon icon={faFacebook as any} />
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="#menu"
              className="btn main-color btn-lg btn-outline-light mt-4"
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
