import { Button } from "react-bootstrap";
import S from "./styles.module.scss";
import Map from "../Map/";

export default function About() {
  return (
    <div className={S.container}>
      <div className={S.aboutDiv}>
        <h1>III Semana de Sistemas de Informação</h1>
        <p>
          Ao longo do SisWeek, os
          participantes têm acesso a palestras, workshops e painéis ministrados
          por especialistas em tecnologia e profissionais experientes. O evento
          oferece insights valiosos sobre as diversas ramificações da
          tecnologia, fornecendo orientações práticas sobre como incorporá-las
          de forma eficaz em suas estratégias de negócios.
        </p>
        <Button className={S.btn}>
          <a href="">Acessar localização</a>
        </Button>
      </div>

      <div className={S.localizationDiv}>
        <h1>De 20 a 22 de Setembro no CCEU - UFAL Penedo</h1>
        <Map />
      </div>
    </div>
  );
}
