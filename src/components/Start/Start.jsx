import sisweekLogo from '../../assets/img/sisweek_logo.png'

import { Button } from 'react-bootstrap'

import S from './styles.module.scss'

export default function Start() {
  return (
    <div className={S.container}>
      <img className={S.imgLogo} src={sisweekLogo} alt="Logo do evento sisweek" />
      <div className={S.text}>
        <h1>III Terceira Semana de Sistemas de Informação</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur similique nisi, delectus accusantium sequi porro soluta veritatis mollitia distinctio odio alias est rerum? Ipsam minima alias voluptatum at similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa commodi veritatis laboriosam? Laboriosam tempora odio unde, vero cumque deserunt ad nisi quisquam est commodi possimus laudantium repellendus odit adipisci.</p>
        <Button className={S.btn1}>Garantir minha vaga!</Button>
        <Button className={S.btn2}>Programação</Button>
      </div>
    </div>
  )
}
