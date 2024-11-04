import { NavLink } from "react-router-dom";

export const Heros = () => {
  return (
    <div id="servicos">
      <div className="d-none d-lg-block">
        <div className="row g-0">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Sobrancelha</h1>
              <p className="lead">
                Alinhamento e técnica para realçar a beleza natural das suas
                sobrancelhas.
              </p>
              <NavLink
                className="btn main-color btn-lg btn-outline-light"
                to="/agendamento"
              >
                Agende aqui
              </NavLink>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Micropigmentação</h1>
              <p className="lead">
                Arte e precisão para sobrancelhas naturalmente definidas e
                harmoniosas.
              </p>
              <NavLink
                className="btn main-color btn-lg btn-outline-light"
                to="/gallery"
              >
                Checar galeria
              </NavLink>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left2"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Outros Serviços</h1>
              <p className="lead">Entre em contato via WhatsApp</p>
              <a
                className="btn main-color btn-lg btn-outline-light"
                href="https://wa.me/5511950424351"
              >
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Heros */}
      <div id="body" className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
            <div className="mt-2">
              <h1>Sobrancelha</h1>
              <p className="lead">
                Alinhamento e técnica para realçar a beleza natural das suas
                sobrancelhas.
              </p>
              <NavLink
                className="btn main-color btn-lg btn-outline-light"
                to="/agendamento"
              >
                Agende aqui
              </NavLink>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-right"></div>
            <div className="mt-2">
              <h1>Conheça outros serviços</h1>
              <p className="lead">Conheça nossa galeria</p>
              <NavLink
                className="btn main-color btn-lg btn-outline-light"
                to="/gallery"
              >
                Checar galeria
              </NavLink>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-left2"></div>
            <div className="mt-2">
              <h1>Outros servicos</h1>
              <p className="lead">Entre em contato</p>
              <a
                className="btn main-color btn-lg text-white"
                href="https://wa.me/5511950424351"
              >
                Entre em contato via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
