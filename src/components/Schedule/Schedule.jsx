import S from './styles.module.scss'

import { useState } from 'react'

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState('coluna1')

  const handleDayChange = event => {
    setSelectedDay(event.target.value)
  }

  return (
    <div className={S.container}>  
        <div className={S.text}>
          <h1>Serão 3 dias de evento</h1>
          <h2>
            Com uma ampla programação com palestras, mesas redondas e oficinas.
          </h2>
        </div>

        <select
          name="daySelect"
          id="daySelect"
          onChange={handleDayChange}
          value={selectedDay}
        >
          <option value="coluna1">Dia 1</option>
          <option value="coluna2">Dia 2</option>
          <option value="coluna3">Dia 3</option>
          <option value="coluna4">Dia 4</option>
        </select>

        <table>
          <tr>
            <td>Horário;</td>
            <td>20/09</td>
            <td>21/09</td>
            <td>22/09</td>
          </tr>
          <tr>
            <td>19:00</td>
            <td>Sistemas de Informação sob a ótica da Inovação Tecnológica</td>
            <td>Introdução à Inteligência Artificial (IA) e seu impacto na educação: O papel da IA na transformação do ensino e da aprendizagem.</td>
            <td>Ferramentas de gestão de mudanças aplicadas à microempresários e empresas de pequeno porte</td>
          </tr>
          <tr>
            <td>20:00</td>
            <td>IA e Tomada de Decisão </td>
            <td>Sistemas de Informação Quântica: A Próxima Revolução Tecnológica</td>
            <td>Automação de Processos de Negócios</td>
          </tr>
          <tr>
            <td>21:00</td>
            <td>Empreendedor de Tecnologia de Sucesso </td>
            <td>Sintonizando - A Intimidade entre Sistemas de Informação e Empreendedores</td>
            <td>Sintonizando - A Intimidade entre Sistemas de Informação e Empreendedores. Foco: Tecnologia por meio das redes (Redes Sociais para vender melhor)</td>
          </tr>
        </table>
        <button><a href="">Garantir minha vaga!</a></button>



    </div>
  )
}
