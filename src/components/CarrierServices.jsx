import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { HiOutlineTruck } from 'react-icons/hi'
import './css/util.css'
import './css/carrier-services.css'

export const CarrierServices = ({ services, isLoading }) => {
    return (
        <Row>
            <Col>
                <h2 className='text-center my-5 fw-700'>Nuestros Servicios</h2>
                <Row className=' mb-5 justify-content-center'>
                    {!isLoading &&
                        services.map((service) =>
                            <Col key={service} xs="12" md="4" lg="4" className='my-1'>
                                <Card>
                                    <Card.Body className='text-center'>
                                        <HiOutlineTruck className='icon-color m-1' size={35} />
                                        <Card.Title className='mb-3 text-center'>{service}</Card.Title>
                                        <Card.Text className='text-start gray-color'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam dignissimos nam ratione.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Col>
        </Row>
    )
}
