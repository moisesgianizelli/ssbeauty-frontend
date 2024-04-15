export const ExploreTopOptions = () => {
  return (
    <div className="p-5 mb-4 bg-dark header">
      <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
        <div className="row">
          {/* Coluna da imagem */}
          <div className="col-md-6">
            <img
              src={require("./../../../Images/PublicImages/unnamed.jpg")}
              width="350"
              height="350"
              style={{ borderRadius: "50%", width: "350px", height: "350px" }}
              alt="profile"
            />
          </div>
          {/* Coluna da descrição */}
          <div className="col-md-6">
            <div>
              <h1 className="display-5 fw-bold">Suyene Silveira</h1>
              <p className="fs-4">
                Profissionalizada em micropigmentacao e sobrancelhas
              </p>

              <a href="#" className="btn main-color btn-lg text-white">
                Conheca mais nossos servicos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
