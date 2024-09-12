import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './carrierCover.css'
export const CarrierCover = ({ carrierName, carrierLogo, carrierSlogan }) => {
    return (
        <Row className='align-items-center justify-content-center hero'>
            <Col sm="12" md="6" lg="6" className='p-3'>
                <h1 className='transport-name'>{carrierName}</h1>
                <p className='transport-slogan'>{carrierSlogan}</p>
            </Col>
            <Col className='text-center p-3'>
                <Image src={carrierLogo} width={350} roundedCircle fluid />
            </Col>
        </Row>
    )
}
