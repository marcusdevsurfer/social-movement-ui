import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const NavbarApp = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-2">
            <Container>
                <Navbar.Brand href="#home">Social</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Sesión iniciada como: <a href="#home">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
