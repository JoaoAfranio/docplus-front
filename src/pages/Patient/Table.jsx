import styled from "styled-components";
import { COLORS } from "../../assets/css/Colors";

export default function Table({ patients }) {
  return (
    <TableContent>
      <tbody>
        <tr>
          <th>Registro</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Celular</th>
        </tr>

        {patients.map((patient) => (
          <tr key={patient.id}>
            <td>{patient.id}</td>
            <td>{patient.name}</td>
            <td>{patient.cpf}</td>
            <td>{patient.cellphone}</td>
          </tr>
        ))}
      </tbody>
    </TableContent>
  );
}

const TableContent = styled.table`
  border-collapse: collapse;
  border: 1px solid #dddddd;

  td,
  th {
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    text-align: left;
    padding: 12px 5px;
    font-size: 14px;
    cursor: pointer;
  }

  tr:nth-child(even) {
    background-color: ${COLORS.LIGHT_BLUE};
  }

  tr:last-child > td {
    border-bottom: none;
  }
`;
