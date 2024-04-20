import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Modal, Button } from "react-bootstrap";

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: Date | null;
  time: string;
  comment: string;
}

const localizer = momentLocalizer(moment);

export const Booking = () => {
  const [formData, setFormData] = useState<BookingForm>({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: null,
    time: "",
    comment: "",
  });

  const [showDateModal, setShowDateModal] = useState<boolean>(false);
  const [showTimeModal, setShowTimeModal] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const {
    register,
    formState: { errors },
  } = useForm<BookingForm>();

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectSlot = (slotInfo: { start: Date; end: Date }) => {
    setFormData({ ...formData, date: slotInfo.start });
    setShowDateModal(false);
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    setFormData({ ...formData, time });
    setShowTimeModal(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const events = [
    {
      title: "Disponível",
      start: new Date(2024, 3, 21, 10, 0), //data disponivel
      end: new Date(2024, 3, 21, 11, 0),
    },
    {
      title: "Disponível",
      start: new Date(2024, 3, 22, 13, 0), // hora disponivel
      end: new Date(2024, 3, 22, 14, 0),
    },
    {
      title: "Disponível",
      start: new Date(2024, 3, 23, 15, 0), // Exemplo de data e hora disponível
      end: new Date(2024, 3, 23, 16, 0),
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Agendamento</h1>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              placeholder="Nome"
              {...register("name")}
              className="form-control form-control-lg input-lg"
              required
            />
          </div>
          <div className="col">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="form-control form-control-lg input-lg"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input
              type="tel"
              placeholder="Telefone"
              {...register("phone")}
              className="form-control form-control-lg input-lg"
              required
            />
          </div>
          <div className="col">
            <select
              {...register("service")}
              className="form-control form-control-lg input-lg"
              required
            >
              <option value="">Selecione o serviço</option>
              <option value="Sobrancelha">Sobrancelha</option>
              <option value="Micropigmentação">Micropigmentação</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="date"
              placeholder="Data"
              value={formData.date ? formData.date.toLocaleDateString() : ""}
              readOnly
              className="form-control form-control-lg input-lg"
              required
              onClick={() => setShowDateModal(true)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="time"
              value={selectedTime}
              readOnly
              className="form-control form-control-lg input-lg"
              required
              onClick={() => setShowTimeModal(true)}
            />
          </div>
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Comentário"
            {...register("comment")}
            className="form-control form-control-lg input-lg"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-lg">
            Agendar
          </button>
        </div>
      </form>

      <Modal show={showDateModal} onHide={() => setShowDateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Selecione a Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ height: 500 }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              selectable="ignoreEvents"
              onSelectSlot={handleSelectSlot}
              eventPropGetter={(event, start, end, isSelected) => ({
                className: "disabled-event",
              })}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDateModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showTimeModal} onHide={() => setShowTimeModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Selecione a Hora</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              className="m-2"
              onClick={() => handleTimeSelection("10:00")}
            >
              10:00
            </Button>
            <Button
              variant="primary"
              className="m-2"
              onClick={() => handleTimeSelection("13:00")}
            >
              13:00
            </Button>
            <Button
              variant="primary"
              className="m-2"
              onClick={() => handleTimeSelection("15:00")}
            >
              15:00
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowTimeModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Booking;
