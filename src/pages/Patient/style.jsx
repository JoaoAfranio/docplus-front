import styled from "styled-components";
import { COLORS } from "../../assets/css/Colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 100px 40px;
  height: 100%;
`;

const Title = styled.h1`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

const BoxInput = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  border: 1px solid ${COLORS.GREY};
  background-color: ${COLORS.LIGHT_GREY};
`;

const Icon = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputSearch = styled.input`
  width: 90%;
  padding: 15px;
  outline: none;
  border: none;
  background-color: ${COLORS.LIGHT_GREY};
`;

export { Container, Title, InputSearch, BoxInput, Icon };
