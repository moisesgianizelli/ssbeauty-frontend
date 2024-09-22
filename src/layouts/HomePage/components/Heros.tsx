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
              <p className="lead">Procurando servico de beleza</p>
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
                Sempre estamos nos atualizando e postando novas imagens
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
              <p className="lead">Entre em contato conosco</p>
              <NavLink
                className="btn main-color btn-lg btn-outline-light"
                to="/agendamento"
              >
                Entre em contato
              </NavLink>
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
              <p className="lead">Just a generic phrase here</p>
              <a className="btn main-color btn-lg text-white" href="#">
                Agende agora
              </a>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-right"></div>
            <div className="mt-2">
              <h1>Conheca outros servicos</h1>
              <p className="lead">Conheca nossa galeria</p>
              <a className="btn main-color btn-lg text-white" href="#">
                Galeria
              </a>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-left2"></div>
            <div className="mt-2">
              <h1>Outros servicos</h1>
              <p className="lead">Entre em contato</p>
              <a className="btn main-color btn-lg text-white" href="#">
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
