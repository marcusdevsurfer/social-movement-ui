import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './carrierCover.css'
export const CarrierCover = ({ carrierName, carrierSlogan }) => {
    return (
        <Row className='align-items-center hero'>
            <Col>
                <h1 className='transport-name'>{carrierName}</h1>
                <p className='transport-slogan'>{carrierSlogan}</p>
                <Button size='lg' variant='dark'><a href="#services"></a>Servicios</Button>
            </Col>
        </Row>
    )
}
