import React from "react";
import { InlineWidget } from "react-calendly";

export const Agendamento = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/ork-mgm/minha-agenda" />
    </div>
  );
};

export default Agendamento;
