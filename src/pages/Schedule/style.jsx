import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: auto;
  width: 100%;
  gap: 20px;
  padding: 80px 40px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export { Container };
