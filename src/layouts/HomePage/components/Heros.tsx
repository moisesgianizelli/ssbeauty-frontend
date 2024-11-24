import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Heros = () => {
  return (
    <div
      id="testimonials"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "4rem 0",
        margin: 0, // Ensures there are no gaps
        width: "100%", // Full width for a strip effect
      }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Customer Testimonials</h2>
        <div className="row justify-content-center">
          {/* Testimonial 1 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded">
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <p className="mt-3">
                "The bread is always fresh and the cakes are absolutely
                delicious! Highly recommended."
              </p>
              <h5 className="mt-3 fw-bold">- John D.</h5>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded">
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <p className="mt-3">
                "I love the variety of pastries here! The croissants are my
                favorite."
              </p>
              <h5 className="mt-3 fw-bold">- Sarah L.</h5>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded">
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <p className="mt-3">
                "The staff is always so friendly, and the bakery smells like
                heaven."
              </p>
              <h5 className="mt-3 fw-bold">- Emily R.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
