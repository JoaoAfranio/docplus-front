import Dashboard from "../../layouts/Dashboard";
import Calendar from "./Calendar";
import { Container } from "./style";

export default function Schedule() {
  return (
    <Dashboard>
      <Container>
        <Calendar />
      </Container>
    </Dashboard>
  );
}
