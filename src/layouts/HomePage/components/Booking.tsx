import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

export const Booking = () => {
  const [formData, setFormData] = useState<BookingForm>({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    setFormData({ ...formData, time });
    setShowModal(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mt-5 text-center">
      <h1>Agendamento</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-3 mx-auto"
        style={{ maxWidth: "400px" }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nome:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Telefone:
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="service" className="form-label">
            Serviço:
          </label>
          <input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Data:
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Hora:
          </label>
          <input
            type="text"
            name="time"
            value={selectedTime}
            readOnly
            className="form-control"
            required
          />
        </div>
        <Button type="submit" className="mb-3">
          Agendar
        </Button>
        <Button
          variant="secondary"
          onClick={() => setShowModal(true)}
          className="mb-3"
        >
          Verificar Disponibilidade
        </Button>
      </form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Datas e Horários Disponíveis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            variant="outline-primary"
            className="d-block mx-auto mb-2"
            onClick={() => handleTimeSelection("09:00")}
          >
            09:00
          </Button>
          <Button
            variant="outline-primary"
            className="d-block mx-auto mb-2"
            onClick={() => handleTimeSelection("10:00")}
          >
            10:00
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};
