import { Button } from "react-bootstrap";
import S from "./styles.module.scss";
import Map from "../Map/";

export default function About() {
  return (
    <div className={S.container}>
      <div className={S.aboutDiv}>
        <h1>III Semana de Sistemas de Informação</h1>
        <p>
          O SisWeek é mais do que um evento educacional; é uma oportunidade de
          networking, colaboração e inspiração. Os participantes têm a chance de
          interagir com outros entusiastas da tecnologia, trocar ideias e
          estabelecer conexões que podem ser valiosas em suas jornadas
          profissionais. Junte-se a nós na emocionante III Semana de Sistemas de
          Informação da Universidade Federal de Alagoas. Convidamos vocês a participar deste evento
          enriquecedor com temas relacionados à tecnologia da informação,
          empreendedorismo e gestão, garanta sua vaga!
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
