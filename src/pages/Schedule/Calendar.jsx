import { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../assets/css/Colors";

export default function Calendar() {
  useEffect(() => {
    const dates = getDatesUntilFriday();
    setDates(dates);
    getHours(8, 16);
  }, []);

  const [dates, setDates] = useState([]);
  const [hours, setHours] = useState([]);

  function getDatesUntilFriday() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const offset = dayOfWeek > 1 ? dayOfWeek - 1 : 6;
    const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - offset);

    const dates = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i);
      const day = date.toLocaleString("default", { weekday: "long" }).slice(0, 3);
      dates.push({ day, date });
    }

    return dates;
  }

  function getHours(startHour, endHour) {
    const newHours = [...hours];
    for (let i = startHour; i <= endHour; i++) {
      newHours.push(i);
    }
    setHours(newHours);
  }

  return (
    <TableContent>
      <thead>
        <tr>
          <th></th>
          {dates.map((d) => (
            <th className="headerDay">
              <p className="weekday">{d.day}.</p>
              <p className="day">{d.date.getDate()}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody id="calendar-body"></tbody>

      {hours.map((h) => {
        return (
          <tr>
            <td>{h}:00</td>
            <td className="width">
              <Box situation={"confimed"}>
                <p>(8:00 - 8:30)</p> <p>Kaley S. Brandt</p>
              </Box>
              <Box>
                <p>(8:30 - 9:00)</p> <p>Kaley S. Brandt</p>
              </Box>
            </td>
            <td className="width">
              <Box situation={"canceled"}>
                <p>(8:00 - 8:30)</p> <p>Kaley S. Brandt</p>
              </Box>
            </td>
            <td className="width">
              <Box situation={"to confirm"}>
                <p>(8:30 - 9:00)</p> <p>Kaley S. Brandt</p>
              </Box>
            </td>
            <td className="width">a</td>
            <td className="width">a</td>
          </tr>
        );
      })}
    </TableContent>
  );
}

const TableContent = styled.table`
  border-collapse: collapse;
  border: 1px solid #dddddd;
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  color: ${COLORS.MEDIUM_GREY};
  position: relative;

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .headerDay {
    padding: 20px 0px;
  }

  .weekday {
    font-size: 11px;
    letter-spacing: 0.8px;
  }

  .day {
    font-size: 26px;
  }

  .width {
    width: 100%;
  }

  td:first-child,
  th:first-child {
    position: absolute;
    left: -40px;
    font-size: 12px;
  }

  td,
  th {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;

    gap: 5px;
    font-size: 14px;
    text-transform: uppercase;
  }

  td:not(:first-child),
  th:not(:first-child) {
    border: 1px solid #dddddd;
  }

  thead > tr > th {
    border: none !important;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  width: 95%;
  height: 45px;
  margin: 5px;

  border-radius: 8px;

  font-weight: bold;
  color: #ffffff;
  letter-spacing: 1px;

  background-color: ${(props) =>
    props.situation === "confimed" ? `${COLORS.MEDIUM_GREEN}` : props.situation === "canceled" ? `${COLORS.RED}` : `${COLORS.DARK_BLUE}`};
`;
