import { Link } from "react-router-dom";
import { Button, Image } from "@chakra-ui/react";
import logo from "../../gelecek-full.svg";
import { Navbar, Nav } from "react-bootstrap";

function NavbarComponent() {
  return (
    <>
      <Navbar sticky="top" bg="light" className="px-2" expand="md">
        <Navbar.Brand as={Link} to="/gelecek-varlik-hr/">
          <Image src={logo} alt="gelecek-varlik-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="ms-1 justify-content-end"
          id="basic-navbar-nav"
        >
          <Nav className="m">
            <Nav.Link as={Link} to="/gelecek-varlik-hr/">
              <Button boxShadow="lg" rounded="md" variant="Link">
                Açık Pozisyonlar
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              <Button boxShadow="lg" rounded="md" variant="Link">
                Başvurularım
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              <Button boxShadow="lg" rounded="md" variant="Link">
                Özgeçmiş Bilgilerim
              </Button>
            </Nav.Link>
          </Nav>
          <Link to="#">
            <Button
              color="#fff"
              backgroundColor="#f5a623"
              boxShadow="lg"
              rounded="md"
              variant="solid"
            >
              Giriş Yap
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
