import { Link } from "react-router-dom";
import { Button, Image, useToast } from "@chakra-ui/react";
import logo from "../../gelecek-full.svg";
import { Navbar, Nav } from "react-bootstrap";

function NavbarComponent() {
  const toast = useToast();
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
              <Button
                color="#31405C"
                boxShadow="lg"
                rounded="md"
                variant="Link"
              >
                Açık Pozisyonlar
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              <Button
                color="#31405C"
                boxShadow="lg"
                rounded="md"
                variant="Link"
                onClick={() => {
                  const toastID = 1;
                  if (!toast.isActive(toastID)) {
                    toast({
                      id: 1,
                      title: "Geliştirilme aşamasında!",
                      description: "Başvurularım sayfası hazırlanıyor.",
                      status: "error",
                      variant: "subtle",
                      duration: 1700,
                      position: "bottom",
                      isClosable: true,
                    });
                  }
                }}
              >
                Başvurularım
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              <Button
                color="#31405C"
                boxShadow="lg"
                rounded="md"
                variant="Link"
                onClick={() => {
                  const toastID = 2;
                  if (!toast.isActive(toastID)) {
                    toast({
                      id: 2,
                      title: "Geliştirilme aşamasında!",
                      description:
                        "Özgeçmiş Bilgilerim sayfası hazırlanıyor...",
                      status: "error",
                      variant: "subtle",
                      duration: 1700,
                      position: "bottom",
                      isClosable: true,
                    });
                  }
                }}
              >
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
              onClick={() => {
                const toastID = 3;
                if (!toast.isActive(toastID)) {
                  toast({
                    id: 3,
                    title: "Geliştirilme aşamasında!",
                    description: "Üyelik özellikleri hazırlanıyor.",
                    status: "error",
                    variant: "subtle",
                    duration: 1700,
                    position: "bottom",
                    isClosable: true,
                  });
                }
              }}
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
