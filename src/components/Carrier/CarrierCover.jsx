import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


export const CarrierCover = ({ carrierName, carrierLogo }) => {
    return (
        <Row style={{ minHeight: '95vh' }} className='align-items-center text-center'>
            <Col lg='7'>
                <h1>{carrierName}</h1>
            </Col>
            <Col>
                <Image src={carrierLogo} width={400} roundedCircle fluid />
            </Col>
        </Row>
    )
}
