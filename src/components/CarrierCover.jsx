import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './carrierCover.css'

export const CarrierCover = ({ carrierName, carrierLogo }) => {
    return (
        <Row className='align-items-center hero'>
            <Col className='p-5'>
                <h1 className='text-start'>{carrierName}</h1>
                <p className='text-start' style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis eius ipsa maiores minus quas voluptatibus neque nam velit optio, veritatis possimus reiciendis architecto harum animi rem ducimus accusamus at.</p>
            </Col>
            <Col className='text-cente'>
                <Image src={carrierLogo} width={350} roundedCircle fluid />
            </Col>
        </Row>
    )
}
