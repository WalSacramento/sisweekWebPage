import S from "./styles.module.scss";

import PhotoMagno from "../../assets/img/magno.jpg";
import PhotoGustavo from "../../assets/img/gustavo.jpg";

export default function Speakers() {
  return (
    <div className={S.container}>
      <h1>Participações confirmadas</h1>

      <div className={S.speakers}>
        <div className={S.speakerLeft}>
          <img src={PhotoMagno} alt="" />
          <div className={S.description}>
            <h2>André Magno</h2>
            <p>
              Possui mestrado e doutorado em ciência da computação pelo Centro
              de Informática da UFPE.
            </p>
            <p>
              É professor Adjunto da Universidade
              Federal de Alagoas (UFAL), lotado no curso de Sistemas de
              Informação (SI) na Unidade Educacional de Penedo, local onde atua
              na área de engenharia de software. É docente permanente do
              programa de pós-graduação em Informática da UFAL (PPGI) e
              desenvolve pesquisas nas áreas de Banco de Dados e Engenharia de
              Software, áreas estas que também atuou no mercado de TI por mais
              de uma década exercendo as funções de analista de sistemas,
              projetista de banco de dados e engenheiro de software
            </p>
          </div>
        </div>
        <div className={S.speakerRight}>
          <img src={PhotoGustavo} alt="" />
          <div className={S.description}>
            <h2>Gustavo Miranda</h2>
            <p>
              Doutor e Mestre em Ciência da Computação pela Universidade Federal
              de Pernambuco. Graduado em Licenciatura em Computação
              pela Universidade de Pernambuco. 
            </p>
            <p>
            Professor Adjunto do curso
              de graduação em Sistemas de Informação da Universidade Federal de
              Alagoas (UFAL) da unidade educacional de Penedo - AL. Possui
              experiência de pesquisa na área de Ciência da Computação, com
              ênfase em Programação e Inteligência Artificial, atuando
              principalmente nos seguintes temas: Desenvolvimento de Software e
              Aprendizado de Máquina On-line.
            </p>
          </div>
        </div>
        <div className={S.speakerLeft}>
          <img src={PhotoMagno} alt="" />
          <div className={S.description}>
            <h2>Nome do palestrante</h2>
            <p>Descrição do palestrante</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cum
              fugit odit quibusdam sit error natus possimus voluptatum non
              consequatur delectus architecto, dolor maxime fugiat quidem
              aperiam fuga expedita eos.
            </p>
          </div>
        </div>
        <div className={S.speakerRight}>
          <img src={PhotoMagno} alt="" />
          <div className={S.description}>
            <h2>Nome do palestrante</h2>
            <p>Descrição do palestrante</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cum
              fugit odit quibusdam sit error natus possimus voluptatum non
              consequatur delectus architecto, dolor maxime fugiat quidem
              aperiam fuga expedita eos.
            </p>
          </div>
        </div>
        <div className={S.speakerLeft}>
          <img src={PhotoMagno} alt="" />
          <div className={S.description}>
            <h2>Nome do palestrante</h2>
            <p>Descrição do palestrante</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cum
              fugit odit quibusdam sit error natus possimus voluptatum non
              consequatur delectus architecto, dolor maxime fugiat quidem
              aperiam fuga expedita eos.
            </p>
          </div>
        </div>
        <div className={S.speakerRight}>
          <img src={PhotoMagno} alt="" />
          <div className={S.description}>
            <h2>Nome do palestrante</h2>
            <p>Descrição do palestrante</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cum
              fugit odit quibusdam sit error natus possimus voluptatum non
              consequatur delectus architecto, dolor maxime fugiat quidem
              aperiam fuga expedita eos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
