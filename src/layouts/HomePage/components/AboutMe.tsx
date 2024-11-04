import { NavLink } from "react-router-dom";

export const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="p-5"
      style={{
        backgroundColor: "#4b4058",
        minHeight: "100vh",
      }}
    >
      <div
        className="container py-5 text-white d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="row w-100">
          <div
            className="col-12 col-md-10 col-lg-8 mx-auto text-center"
            style={{ padding: "0rem", marginTop: "-2rem" }}
          >
            <h1 className="display-5 fw-bold">SSBeauty</h1>
            <p className="fs-5">
              Profissionalizada em micropigmentação e sobrancelhas, Suyene
              Silveira possui mais de 10 anos de experiência no setor de beleza
              e estética. Ao longo de sua carreira, ela atendeu mais de 10 mil
              clientes, sempre prezando pela qualidade e satisfação. Como
              proprietária do SSBeauty, Suyene oferece seus serviços na região
              de São Paulo, onde é reconhecida por sua dedicação e excelência.
              <br />
              Suyene está constantemente se atualizando com as novas tendências
              de mercado, garantindo que suas técnicas e conhecimentos estejam
              sempre à frente. Seu compromisso com a inovação e a perfeição faz
              dela uma referência no ramo, proporcionando aos seus clientes
              resultados que superam expectativas.
              <br />
            </p>
            <div className="col-12 text-center mt-4">
              <hr />
              <h2 className="my-4">Avaliações de Clientes</h2>
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="card text-white mb-3"
                    style={{ backgroundColor: "#332b3f" }}
                  >
                    <div className="card-body">
                      <p className="card-text">
                        "Excelente profissional! O atendimento é impecável e o
                        resultado incrível. Recomendo a todos!" - Maria S.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card text-white mb-3"
                    style={{ backgroundColor: "#332b3f" }}
                  >
                    <div className="card-body">
                      <p className="card-text">
                        "A Suyene é maravilhosa! Estou muito satisfeita com
                        minhas sobrancelhas. Obrigada!" - Ana P.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card text-white mb-3"
                    style={{ backgroundColor: "#332b3f" }}
                  >
                    <div className="card-body">
                      <p className="card-text">
                        "Adorei o trabalho da Suyene. Profissional de altíssima
                        qualidade e super atenciosa." - Carla M.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#servicos"
              className="btn main-color btn-lg btn-outline-light mt-3"
              style={{ width: "200px" }}
            >
              Serviços
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
