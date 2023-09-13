import S from './styles.module.scss'

import programacaoImg from '../../assets/img/programacao.png'

import { useState } from 'react'

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState('coluna1')

  return (
    <div className={S.container}>
      <div className={S.text}>
        <h1>Serão 3 dias de evento</h1>
        <h2>
          Com uma ampla programação com palestras, mesas redondas e oficinas.
        </h2>
      </div>

      <div className={S.schedule}>
        <img src={programacaoImg} alt="" />
      </div>
      <button>
        <a href="https://doity.com.br/sisweek-2023">Garantir minha vaga!</a>
      </button>
    </div>
  )
}
