import About from '../../components/About'
import Footer from '../../components/Footer'
import Navigation from '../../components/Nav'
import Schedule from '../../components/Schedule'
import Speakers from '../../components/Speakers'
import Start from '../../components/Start'
import S from './styles.module.scss'

export default function Home() {
  return (
    <>
      <Navigation />
      <div id="home">
        <Start />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="schedule">
        <Schedule />
      </div>
      <div id="speakers">
        <Speakers />
      </div>
      <Footer />
    </>
  )
}
