import { Container, Content, Title, Box, BoxGraph } from "./style";
import { BsFillPersonFill, BsFillArrowUpCircleFill, BsGenderAmbiguous } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import Info from "./Info";
import { useState } from "react";
import Graph from "./Graph";

export default function GraphicPatients() {
  const [active, setActive] = useState("total");

  function setElementActive(e) {
    console.log(e.target);
  }

  const labels = ["January", "February", "March", "April", "May", "June", "July"];
  const name = "Total de Pacientes";
  const arrayData = [500, 600, 200, 350, 485, 950, 800];

  return (
    <Container>
      <Title>
        <BsFillPersonFill /> Pacientes
      </Title>
      <Content>
        <Box>
          <Info setElementActive={setElementActive} icon={<IoPeopleSharp />} isActive={active === "total" ? true : false} description={"Total"} data={"1233"} />
          <Info icon={<BsFillArrowUpCircleFill />} isActive={active === "newPatients" ? true : false} description={"Novos Pacientes"} data={"44 / mês"} />
          <Info icon={<FaBirthdayCake />} isActive={active === "age" ? true : false} description={"Distribuição por"} data={"Idade"} />
          <Info icon={<BsGenderAmbiguous />} isActive={active === "gender" ? true : false} description={"Distribuição por"} data={"Gênero"} />
        </Box>

        <BoxGraph>
          <Graph labels={labels} name={name} arrayData={arrayData} />
        </BoxGraph>
      </Content>
    </Container>
  );
}
