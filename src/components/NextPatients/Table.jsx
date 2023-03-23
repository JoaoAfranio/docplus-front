import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../assets/css/Colors";
import ModalAppointment from "../ModalAppointment";
import BoxSituation from "./BoxSituation";

function createData(schedule, name, situation) {
  return { schedule, name, situation };
}

const rows = [
  createData("8:00", "Kaley S. Brandt", "confirmed"),
  createData("9:00", "Denise R. Guffey", "canceled"),
  createData("10:00", "Denise R. Guffey", "not confirmed"),
  createData("11:00", "Denise R. Guffey", "canceled"),
  createData("12:00", "Denise R. Guffey", "not confirmed"),
  createData("14:00", "Denise R. Guffey", "canceled"),
];

export default function Table() {
  const [showModal, setShowModal] = useState(false);
  const [patient, setPatient] = useState();

  return (
    <TableContent>
      <tbody>
        <tr>
          <th>Horário</th>
          <th>Nome</th>
          <th>Situação</th>
        </tr>

        {rows.map((patient, idx) => (
          <tr
            onClick={() => {
              setShowModal(true);
              setPatient(patient);
            }}
            key={idx}
          >
            <td>{patient.schedule}</td>
            <td>{patient.name}</td>
            <td>
              <BoxSituation situation={patient.situation} />
            </td>
          </tr>
        ))}
      </tbody>

      <ModalAppointment show={showModal} setShow={setShowModal} isUpdate={true} patient={patient} />
    </TableContent>
  );
}

const TableContent = styled.table`
  border-collapse: collapse;

  td,
  th {
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    text-align: left;
    padding: 12px 5px;
    font-size: 14px;
    cursor: pointer;
  }

  td:last-child,
  th:last-child {
    text-align: end;
  }

  tr:nth-child(even) {
    background-color: ${COLORS.LIGHT_BLUE};
  }

  tr:last-child > td {
    border-bottom: none;
  }
`;
