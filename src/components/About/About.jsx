import { Button } from 'react-bootstrap'
import S from './styles.module.scss'
import Map from '../Map/'

export default function About() {
  return (
    <div className={S.container}>
      <div className={S.aboutDiv}>
        <h1>III Semana de Sistemas de Informação</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          illo, voluptatum quasi ipsa eveniet repellat soluta saepe, itaque eius
          tempora cupiditate laudantium quae quam fuga cum vel recusandae! Odit,
          quia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Distinctio earum vel ut qui ad, voluptatem atque porro voluptatum
          ducimus minima hic consequuntur illo ea, illum vitae sapiente eos quam
          provident! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cumque ex nostrum numquam tenetur possimus, nulla laboriosam, qui enim
          pariatur et iste harum! Tempora ipsum cupiditate, ducimus voluptatem
          culpa quaerat repellendus.
        </p>
        <Button className={S.btn}><a href="">Acessar localização</a></Button>
      </div>

      <div className={S.localizationDiv}>
        <h1>De 20 a 22 de Setembro</h1>
        <h1>No CCEU - UFAL Penedo</h1>

        <Map />
      </div>
    </div>
  )
}
