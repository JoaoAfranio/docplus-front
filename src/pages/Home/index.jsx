import AppointmentsPatients from "../../components/AppointmentsPatients";
import GraphicPatients from "../../components/GraphicPatients";
import NextPatients from "../../components/NextPatients";
import Dashboard from "../../layouts/Dashboard";
import { Container, Row } from "./style";

export default function Home() {
  return (
    <Dashboard>
      <Container>
        <Row>
          <GraphicPatients />
          <NextPatients />
        </Row>

        <AppointmentsPatients />
      </Container>
    </Dashboard>
  );
}
