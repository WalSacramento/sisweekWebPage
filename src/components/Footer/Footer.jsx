import S from './styles.module.scss'

import ufalLogo from '../../assets/img/ufal_logo.png'
import siLogo from '../../assets/img/si_logo.png'
import prefeituraLogo from '../../assets/img/prefeitura_logo.png'
import parceiroExemplo from '../../assets/img/partner_example.png'
import codevasfLogo from '../../assets/img/codevasf_logo.jpeg'
import sebraeLogo from '../../assets/img/sebrae_logo.png'
import pindoramaLogo from '../../assets/img/pindorama_logo.png'
import aguaVerdesMaresLogo from '../../assets/img/agua_verdes_mares_logo.png'
import biscoitoDliciaLogo from '../../assets/img/biscoito_dlicia_logo.jfif'
import restauranteMauricioDeNassauLogo from '../../assets/img/restaurante_mauricio_de_nassau_logo.png'
import kombuchapiraLogo from '../../assets/img/kombuchapira_logo.png'
import prestekLogo from '../../assets/img/prestek_logo.png'
import vovomazeLogo from '../../assets/img/vovomaze_logo.jpg'
import maceiosignLogo from '../../assets/img/maceiosign_logo.jpg'

export default function Footer() {
  return (
    <>
      <div className={S.container}>
        <div className={S.realizationAndPartners}>
            <p>Realização:</p>
          <div className={S.realization}>
            <div className={S.logos}>
              <img src={ufalLogo} alt="" />
              <img src={siLogo} alt="" />
            </div>
          </div>
            <p>Apoio:</p>
          <div className={S.partners}>
            <div className={S.logos}>
              <img src={prefeituraLogo} alt="" />
              <img src={codevasfLogo} alt="" />
              <img src={sebraeLogo} alt="" />
              <img src={pindoramaLogo} alt="" />
              <img src={aguaVerdesMaresLogo} alt="" />
              <img src={biscoitoDliciaLogo} alt="" />
              <img src={restauranteMauricioDeNassauLogo} alt="" />
              <img src={kombuchapiraLogo} alt="" />
              <img src={prestekLogo} alt="" />
              <img src={vovomazeLogo} alt="" />
              <img src={maceiosignLogo} alt="" />
            </div>
          </div>
        </div>

        <div className={S.copyright}>
          <div className={S.divider}></div>
          <p>Copyright © 2023 Sisweek </p>
        </div>

      </div>

    </>
  )
}
