import { BsFillPersonFill } from "react-icons/bs";
import Dashboard from "../../layouts/Dashboard";
import { BoxInput, Container, Icon, InputSearch, Title } from "./style";
import { BiSearch } from "react-icons/bi";
import Table from "./Table";
import { useEffect, useState } from "react";

export default function Patient() {
  const [input, setInput] = useState("");
  const [filterPatients, setFilterPatients] = useState([]);

  function createData(id, name, cpf, cellphone) {
    return { id, name, cpf, cellphone };
  }

  const rows = [
    createData("1", "Kaley S. Brandt", "123.000.000-00", "(11)40015154"),
    createData("2", "Denise R. Guffey", "000.000.000-00", "(11)40015154"),
    createData("3", "Denise R. Guffey", "000.000.000-00", "(11)40015154"),
    createData("4", "Denise R. Guffey", "567.000.000-00", "(11)40015154"),
    createData("5", "Denise R. Guffey", "000.000.000-00", "(11)40015154"),
    createData("6", "Denise R. Guffey", "000.000.000-00", "(11)40015154"),
  ];

  useEffect(() => {
    setFilterPatients(rows);
  }, []);

  function handleInput(e) {
    const value = e.target.value;
    setInput(value);
    const filter = rows.filter((p) => {
      return p.name.toLowerCase().includes(value) || p.cellphone.includes(value) || p.cpf.includes(value);
    });

    setFilterPatients(filter);
  }

  return (
    <Dashboard>
      <Container>
        <Title>
          <BsFillPersonFill /> Pacientes
        </Title>

        <BoxInput>
          <InputSearch
            placeholder="Busque pelo nome, celular, telefone ou CPF"
            value={input}
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <Icon>
            <BiSearch />
          </Icon>
        </BoxInput>

        <Table patients={filterPatients} />
      </Container>
    </Dashboard>
  );
}
