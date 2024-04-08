import React from "react";

export const ReturnOption = () => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img
          src={require("./../../../Images/BooksImages/parachute.jpg")}
          width="151"
          height="233"
          alt="book"
        />
        <h6 className="mt-2">Parachute</h6>
        <p>Casorio</p>
        <a className="btn main-color text-white" href="#">
          Choose
        </a>
      </div>
    </div>
  );
};
