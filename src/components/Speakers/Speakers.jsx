import S from './styles.module.scss'

import SpeakerExample from '../../assets/img/speaker_example.png'

export default function Speakers() {
  return (
    <div className={S.container}>
      <h1>Participações confirmadas</h1>

      <div className={S.speakers}>
        <div className={S.speakerLeft}>
          <img src={SpeakerExample} alt="" />
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
          <img src={SpeakerExample} alt="" />
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
          <img src={SpeakerExample} alt="" />
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
          <img src={SpeakerExample} alt="" />
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
          <img src={SpeakerExample} alt="" />
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
          <img src={SpeakerExample} alt="" />
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
  )
}
