import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './carrierCover.css'

export const CarrierCover = ({ carrierName, carrierLogo, carrierSlogan }) => {
    return (
        <Row className='align-items-center hero'>
            <Col sm="12" md="6" lg="6" className='p-5'>
                <h1 className='text-start'>{carrierName}</h1>
                <p className='text-start' style={{textAlign: 'justify'}}>{carrierSlogan}</p>
            </Col>
            <Col className='text-center'>
                <Image src={carrierLogo} width={350} roundedCircle fluid />
            </Col>
        </Row>
    )
}
