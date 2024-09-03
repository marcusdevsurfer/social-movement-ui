import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { HiOutlineTruck } from 'react-icons/hi'
export const CarrierServices = ({ services, isLoading }) => {
    const titleColor = '#020817'
    const subtitleColor = '#5E6D82'
    const iconColor = '#2563EB'
    return (
        <Row className='' style={{ minHeight: '50vh', boxShadow: "0rem 0.2rem 5rem 0.1rem gray" }} >
            <Col>
                <h2 style={{ color: titleColor }} className='text-center mt-5'>Nuestros Servicios</h2>
                <Row className='mt-4 justify-content-center'>
                    {!isLoading &&
                        services.map((e) =>
                            <Col key={e} xs="12" md="6" lg="3" className='my-1'>
                                <Card className='p-1'>
                                    <Card.Body>
                                        <Card.Text className='text-center'><HiOutlineTruck style={{ color: iconColor }} size={30} /></Card.Text>
                                        <Card.Title style={{ color: titleColor }} className='mb-3 text-center'>{e}</Card.Title>
                                        <Card.Text style={{ color: subtitleColor }} className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam dignissimos nam ratione.
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
