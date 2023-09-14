import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import S from './styles.module.scss'

import sisweekLogo from '../../assets/img/sisweek_name_logo.png'

export default function Navigation() {
  return (
    <>
      <Navbar expand="lg" variant="dark" className={S.navbar} sticky="top">
        <Container fluid className={S.container}>
          <Navbar.Brand href="#">
            <img
              className={S.imgLogo}
              src={sisweekLogo}
              alt="Logo do evento Sisweek"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <div className={S.links}>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className={S.navbarScroll}
                navbarScroll
              >
                <Nav.Link className={S.textLink} href="#home">Ínicio</Nav.Link>
                <Nav.Link className={S.textLink} href="#about">Sobre o evento</Nav.Link>
                <Nav.Link className={S.textLink} href="#schedule">Programação</Nav.Link>
                <Nav.Link className={S.textLink} href="#speakers">Participantes</Nav.Link>
                <Button className={S.btn1}>
                  <a href="https://doity.com.br/sisweek-2023">Garantir minha vaga!</a>
                </Button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  )
}
