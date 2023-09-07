import sisweekLogo from "../../assets/img/sisweek_logo.png";

import { Button } from "react-bootstrap";

import S from "./styles.module.scss";

export default function Start() {
  return (
    <div className={S.container}>
      <img
        className={S.imgLogo}
        src={sisweekLogo}
        alt="Logo do evento sisweek"
      />
      <div className={S.text}>
        <h1>III Terceira Semana de Sistemas de Informação</h1>
        <p>
          A semana de Sistemas de Informação (Sisweek) tem como objetivo
          oferecer oportunidades para a realização de atividades de extensão e
          promover a interação da universidade com a sociedade. Este evento
          abrange uma variedade de tópicos relacionados à tecnologia da
          informação, empreendedorismo e gestão, contribuindo para uma
          experiência educativa, cultural e científica. Ao longo do SisWeek, os
          participantes têm acesso a palestras, workshops e painéis ministrados
          por especialistas em tecnologia e profissionais experientes. O evento
          oferece insights valiosos sobre as diversas ramificações da
          tecnologia, fornecendo orientações práticas sobre como incorporá-las
          de forma eficaz em suas estratégias de negócios.
        </p>
        <div className={S.divbtn}>
          <Button className={S.btn1}>
            <a href="">Garantir minha vaga!</a>
          </Button>
          <Button className={S.btn2}>
            <a href="#schedule">Programação</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
