import GraphicPatients from "../../components/GraphicPatients";
import NextPatients from "../../components/NextPatients";
import Dashboard from "../../layouts/Dashboard";
import { Container } from "./style";

export default function Home() {
  return (
    <Dashboard>
      <Container>
        <GraphicPatients />
        <NextPatients />
      </Container>
    </Dashboard>
  );
}
