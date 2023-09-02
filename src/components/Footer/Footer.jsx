import S from './styles.module.scss'

import ufalLogo from '../../assets/img/ufal_logo.png'
import siLogo from '../../assets/img/si_logo.png'
import prefeituraLogo from '../../assets/img/prefeitura_logo.png'
import parceiroExemplo from '../../assets/img/partner_example.png'

export default function Footer() {
  return (
    <>
      <div className={S.container}>
        <div className={S.realization}>
          <h1>Realização:</h1>
          <div className={S.logos}>
            <img src={ufalLogo} alt="" />
            <img src={siLogo} alt="" />
          </div>
        </div>
        <div className={S.partners}>
          <h1>Apoio:</h1>
          <div className={S.logos}>
            <img src={prefeituraLogo} alt="" />
            <img src={parceiroExemplo} alt="" />
          </div>
        </div>
      </div>

      <div className={S.copyright}>
        <div className={S.divider}></div>
        <p>Copyright © 2023 Sisweek </p>
      </div>
    </>
  )
}
