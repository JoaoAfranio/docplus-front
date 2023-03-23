import { useState } from "react";
import ModalAppointment from "../../components/ModalAppointment";
import Dashboard from "../../layouts/Dashboard";
import Calendar from "./Calendar";
import { Button, Container } from "./style";

export default function Schedule() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Dashboard>
      <Container>
        <Button
          onClick={() => {
            setShowModal(true);
          }}
        >
          + Nova Consulta
        </Button>
        <Calendar />
      </Container>

      <ModalAppointment show={showModal} setShow={setShowModal} />
    </Dashboard>
  );
}
