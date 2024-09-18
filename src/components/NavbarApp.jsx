import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
export const NavbarApp = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" >
            <Container>
                <Navbar.Brand href="/" className="text-white">Social</Navbar.Brand>
                {/* <Navbar.Toggle className="text-white" />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="text-white">
                        Sesión iniciada como: <a className="text-white" href="#">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    )
}
