import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './carrierCover.css'
export const CarrierCover = ({ carrierName, carrierLogo }) => {
    return (
        <Row className='align-items-center text-center example'>
            <Col lg='7'>
                <h1 className='text-white bg-dark rounded p-3'>{carrierName}</h1>
            </Col>
            <Col>
                <Image src={carrierLogo} width={400} roundedCircle fluid />
            </Col>
        </Row>
    )
}
