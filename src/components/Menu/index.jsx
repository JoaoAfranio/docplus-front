import { Container, Item, Title } from "./style";
import Home from "../../assets/icons/home.png";
import Schedule from "../../assets/icons/schedule.png";
import Graph from "../../assets/icons/graph.png";
import User from "../../assets/icons/user.png";
import Patient from "../../assets/icons/patient.png";

export default function Menu() {
  return (
    <Container>
      <Title>docplus</Title>
      <Item activeClassName="active" to="/dashboard">
        <img src={Home} alt="home" /> Home
      </Item>

      <Item activeClassName="active" to="/schedule">
        <img src={Schedule} alt="schedule" /> Agenda
      </Item>

      <Item activeClassName="active" to="/patient">
        <img src={Patient} alt="patient" /> Pacientes
      </Item>

      <Item activeClassName="active" to="/information">
        <img src={Graph} alt="information" /> Informações
      </Item>

      <Item activeClassName="active" to="/profile">
        <img src={User} alt="profile" /> Perfil
      </Item>
    </Container>
  );
}
