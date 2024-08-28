import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

// Azul oscuro (#2F4F7F)
// Gris claro (#F7F7F7)
// Verde oscuro (#3E8E41)
// Blanco (#FFFFFF)

export const NavbarApp = () => {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#F7F7F7' }} >
            <Container>
                <Navbar.Brand href="#">Social</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Sesión iniciada como: <a href="#">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
