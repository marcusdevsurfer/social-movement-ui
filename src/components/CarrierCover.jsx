import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import logo from '../assets/logo.jpg'




export const CarrierCover = ({ carrierName, carrierLogo }) => {

    const style = {
        minHeight: '95vh',
    }

    return (
        <Row style={style} className='align-items-center text-center'>
            <Col lg='7'>
                <h1>{carrierName}</h1>
            </Col>
            <Col>
                <Image src={carrierLogo} width={400} roundedCircle fluid />
            </Col>
        </Row>
    )
}
