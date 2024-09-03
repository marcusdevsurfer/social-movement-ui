import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

// Azul oscuro (#2F4F7F)
// Gris claro (#F7F7F7)
// Verde oscuro (#3E8E41)
// Blanco (#FFFFFF)

export const NavbarApp = () => {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'rgb(10, 133, 55)', minHeight: '8vh' }} >
            <Container>
                <Navbar.Brand href="/" className="text-white">Social</Navbar.Brand>
                <Navbar.Toggle className="text-white" />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="text-white">
                        Sesión iniciada como: <a className="text-white" href="#">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
