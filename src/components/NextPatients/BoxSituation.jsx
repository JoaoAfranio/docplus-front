import styled from "styled-components";
import { COLORS } from "../../assets/css/Colors";

export default function BoxSituation({ situation }) {
  const colorBox = situation === "confirmed" ? `${COLORS.GREEN}` : situation === "canceled" ? `${COLORS.RED}` : `${COLORS.YELLOW}`;
  const subtitle = situation === "confirmed" ? "confirmado" : situation === "canceled" ? "cancelado" : "confirmar";

  return (
    <>
      <Box colorBox={colorBox}>
        <BoxSubtitle>
          <h1>{subtitle}</h1>
        </BoxSubtitle>
      </Box>
    </>
  );
}

const BoxSubtitle = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: ${COLORS.DARK_BLUE};
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: -8px;
  right: 115%;

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent ${COLORS.DARK_BLUE};
  }
`;

const Box = styled.div`
  float: right;
  border: 1px solid #000000;
  border-radius: 5px;
  width: 14px;
  height: 14px;
  background-color: ${(props) => props.colorBox};
  position: relative;

  &:hover > ${BoxSubtitle} {
    visibility: visible;
  }
`;
