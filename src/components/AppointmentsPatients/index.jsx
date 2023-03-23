import { useState } from "react";
import { BsCardList, BsFillPersonFill } from "react-icons/bs";
import { BiBlock } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineThumbUp } from "react-icons/hi";
import Info from "../GraphicPatients/Info";
import Graph from "./Graph";
import { Box, BoxGraph, Container, Content, Title } from "./style";

export default function AppointmentsPatients() {
  const [active, setActive] = useState("total");

  const labels = ["January", "February", "March", "April", "May", "June", "July"];
  const name = "Total de Pacientes";
  const arrayData = [500, 600, 200, 350, 485, 950, 800];

  return (
    <Container>
      <Title>
        <BsFillPersonFill /> Consultas
      </Title>

      <Content>
        <BoxGraph>
          <Graph labels={labels} name={name} arrayData={arrayData} />
        </BoxGraph>

        <Box>
          <Info icon={<HiOutlineThumbUp />} isActive={active === "total" ? true : false} description={"Realizadas"} data={"2565"} />
          <Info icon={<AiOutlineCalendar />} isActive={active === "schedule" ? true : false} description={"Agendadas"} data={"168"} />
          <Info icon={<BsCardList />} isActive={active === "average" ? true : false} description={"Média Mensal"} data={"106"} />
          <Info icon={<BiBlock />} isActive={active === "absence" ? true : false} description={"Faltas"} data={"76"} />
        </Box>
      </Content>
    </Container>
  );
}
