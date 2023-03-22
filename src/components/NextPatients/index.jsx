import { Container, Content, Header, Subtitle, Title } from "./style";
import { AiOutlineSchedule } from "react-icons/ai";
import Table from "./Table";

export default function NextPatients() {
  return (
    <Container>
      <Title>
        <AiOutlineSchedule />
        Agenda
      </Title>
      <Content>
        <Header>
          <Subtitle className="active">Hoje</Subtitle>
          <Subtitle>Amanhã</Subtitle>
        </Header>

        <Table />
      </Content>
    </Container>
  );
}
