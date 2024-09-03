import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


//Colores


//Letra de subtitulo
const subtitle = '#5E6D82'
//Navbar background color
const navbarBg = '#2563EB'
//Background segunda seccion
const bgSectionTwo = '#F1F5F9'
//Titulos
const titleColor = '#020817'


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
