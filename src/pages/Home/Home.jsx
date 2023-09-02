import About from '../../components/About'
import Navigation from '../../components/Nav'
import Schedule from '../../components/Schedule'
import Speakers from '../../components/Speakers'
import Start from '../../components/Start'
import S from './styles.module.scss'

export default function Home() {
  return (
    <>
      <Navigation />
      <Start />
      <About />
      <Schedule />
      <Speakers />
    </>
  )
}
