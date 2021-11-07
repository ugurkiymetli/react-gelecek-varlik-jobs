import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import logo from "../../gelecek-full.svg";
import { Navbar, Nav } from "react-bootstrap";

function NavbarComponent() {
  return (
    <>
      <Navbar sticky="top" bg="light" expand="md">
        <Navbar.Brand as={Link} to="/gelecek-varlik-hr/">
          <img src={logo} alt="gelecek-varlik-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="ms-1" id="basic-navbar-nav">
          <Nav className="m">
            <Nav.Link as={Link} to="#">
              <Button variant="Link">Açık Pozisyonlar</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              <Button variant="Link">Başvurularım</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              <Button variant="Link">Özgeçmiş Bilgilerim</Button>
            </Nav.Link>
          </Nav>
          <Link to="#">
            <Button color="#fff" backgroundColor="#f5a623" variant="outline">
              Giriş Yap
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>

      {/* <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Link to="/gelecek-varlik-hr/">
              <img src={logo} alt="gelecek-varlik-logo" />
            </Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <Link to="#">Açık Pozisyonlar</Link>
            </li>

            <li>
              <Link to="#">Başvurularım </Link>
            </li>

            <li>
              <Link to="#">Özgeçmiş Bilgilerim</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <Button variant="solid">Giriş Yap</Button>
        </div>
      </nav> */}
    </>
  );
}

export default NavbarComponent;
