import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 100px 40px;
  height: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export { Container };
