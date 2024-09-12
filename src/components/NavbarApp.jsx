import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
const navbarBg = '#000000'
export const NavbarApp = () => {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: navbarBg, minHeight: '8vh' }} >
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
