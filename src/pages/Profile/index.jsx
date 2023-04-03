import { BsFillPersonLinesFill } from "react-icons/bs";
import Dashboard from "../../layouts/Dashboard";
import { Button, Container, Content, Input, InputGroup, Label, Title } from "./style";

export default function Profile() {
  return (
    <Dashboard>
      <Container>
        <Title>
          <BsFillPersonLinesFill />
          Atualizar Perfil
        </Title>

        <Content>
          <InputGroup>
            <Label>Nome</Label>
            <Input disabled type="text" placeholder="Seu nome" />
          </InputGroup>

          <InputGroup>
            <Label>Email</Label>
            <Input disabled type="email" placeholder="Seu nome" />
          </InputGroup>
          <InputGroup>
            <Label>Alterar Senha</Label>
            <Input type="password" placeholder="Senha antiga" />
            <Input type="password" placeholder="Senha Nova" />
            <Input type="password" placeholder="Confirmar Senha" />
          </InputGroup>

          <Button>Salvar Alterações</Button>
        </Content>
      </Container>
    </Dashboard>
  );
}
