import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const ExploreTopOptions = () => {
  return (
    <div
      className="p-5"
      style={{
        backgroundColor: "#332b3f",
        height: "100vh",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <div
        className="container-fluid py-5 text-white d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="row w-100">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={require("./../../../Images/PublicImages/profile.jpg")}
              style={{ borderRadius: "50%", maxWidth: "70%", height: "auto" }}
              alt="profile"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold text-center">Suyene Silveira</h1>
            <p className="fs-4 text-center">
              Profissionalizada em micropigmentacao, unhas e sobrancelhas
            </p>
            <div className="col-12 text-center">
              <hr />
              <ul className="social list-inline">
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/feed/"
                    className="icon brands"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/moisesgianizelli/"
                    className="icon brands"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="icon brands">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
              </ul>
            </div>

            <NavLink
              to="/gallery"
              className="btn main-color btn-lg btn-outline-light mt-3 mx-auto"
              style={{ width: "200px" }}
            >
              Conheça mais
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
