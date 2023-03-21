import styled from "styled-components";
import Menu from "../components/Menu";

export default function Dashboard({ children }) {
  return (
    <Container>
      <Menu />
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 30px;
`;
