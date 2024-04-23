import { NavLink } from "react-router-dom";

export const ExploreTopOptions = () => {
  return (
    <div className="p-5 mb-4" style={{ backgroundColor: "#332b3f" }}>
      <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-6">
            <img
              src={require("./../../../Images/PublicImages/unnamed.jpg")}
              width="350"
              height="350"
              style={{ borderRadius: "50%", width: "350px", height: "350px" }}
              alt="profile"
            />
          </div>
          <div className="col-md-6">
            <div>
              <h1 className="display-5 fw-bold">Suyene Silveira</h1>
              <p className="fs-4">
                Profissionalizada em micropigmentacao e sobrancelhas
              </p>
              <p className="fs-5">
                Com mais de 10 anos de experiencia em mais de 10 mil clientes
                atendidos
              </p>

              <NavLink
                to="/gallery"
                className="btn main-color btn-lg text-white"
              >
                Conheca mais nossos servicos
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
