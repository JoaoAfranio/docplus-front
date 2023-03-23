import { BoxDate, Content, Footer, Header, Modal, ModalOpacity, InputGroup, InputMinute, Icon } from "./style";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsCalendarCheck, BsFillPersonFill } from "react-icons/bs";
import { GiMedicalPack } from "react-icons/gi";

export default function ModalAppointment({ show, setShow, isUpdate, patient }) {
  const Title = isUpdate ? "Atualizar Agendamento" : "Novo Agendamento";

  return (
    <ModalOpacity show={show}>
      <Modal>
        <Header>{Title}</Header>
        <Content>
          <InputGroup>
            <Icon>
              <AiOutlineCalendar className="icon" />
            </Icon>
            <BoxDate>
              <input disabled={isUpdate} type="date" />
              <input disabled={isUpdate} type="text" placeholder="12:00" />

              <InputMinute>
                <input disabled={isUpdate} type="text" className="minutes" placeholder="40" />
                <div>
                  <p>min</p>
                </div>
              </InputMinute>
            </BoxDate>
          </InputGroup>

          <InputGroup>
            <Icon>
              <BsFillPersonFill className="icon" />
            </Icon>
            <input type="select" disabled={isUpdate} className="input" placeholder="Nome do Paciente" value={patient?.name} />
          </InputGroup>

          <InputGroup>
            <Icon>
              <BsCalendarCheck className="icon" />
            </Icon>
            <input type="select" className="input" placeholder="Situação" />
          </InputGroup>

          <InputGroup>
            <Icon>
              <GiMedicalPack className="icon" />
            </Icon>
            <input type="select" className="input" placeholder="Motivo" />
          </InputGroup>
          <InputGroup>
            <label>Compromisso pessoal</label>
            <input type="checkbox" />

            <label>Teleconsulta</label>
            <input type="checkbox" />
          </InputGroup>
        </Content>
        <Footer>
          <button
            className="close"
            onClick={() => {
              setShow(false);
            }}
          >
            Cancelar
          </button>
          {isUpdate && <button className="delete">Excluir</button>}
          <button className="save">Salvar</button>
        </Footer>
      </Modal>
    </ModalOpacity>
  );
}
