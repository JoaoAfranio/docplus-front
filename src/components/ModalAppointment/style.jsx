import styled from "styled-components";
import { COLORS } from "../../assets/css/Colors";

const ModalOpacity = styled.div`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 700px;
  height: 500px;
  padding: 50px;

  background-color: #ffffff;
  border-radius: 10px;
`;

const Header = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  input {
    padding: 5px;
    font-size: 16px;
    width: 30%;
    padding-left: 10px;
    border: 2px solid #dadada;
  }
`;
const Footer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  gap: 30px;

  button {
    padding: 15px 10px;

    cursor: pointer;

    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    color: #ffffff;

    border: none;
    border-radius: 18px;

    &:active {
      transform: scale(0.98);
    }

    &.close {
      background-color: ${COLORS.DARKER_BLUE};
      border-bottom: 5px solid #3f22ec;
    }

    &.delete {
      background-color: ${COLORS.RED};
      border-bottom: 5px solid #912805;
    }

    &.save {
      background-color: ${COLORS.GREEN};
      border-bottom: 5px solid #40890a;
    }
  }
`;

const BoxDate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InputMinute = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dadada;
  background-color: #eeeeee;

  width: 30%;

  div {
    margin: auto;
  }

  .minutes {
    border: 1px solid #dadada;
    width: 50%;
  }
`;

const Icon = styled.div`
  width: 50px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-right: 10px;
  }

  input[type="checkbox"] {
    width: inherit;
    margin-right: 20px;
  }

  .icon {
    width: 50px;
    font-size: 24px;
  }

  .input {
    width: 60%;
  }
`;

export { ModalOpacity, Modal, Header, Content, Footer, BoxDate, InputGroup, InputMinute, Icon };
