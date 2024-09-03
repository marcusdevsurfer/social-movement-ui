import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { HiOutlineTruck, HiTruck } from 'react-icons/hi'
export const CarrierServices = ({ services, isLoading }) => {
    return (
        <Row style={{ minHeight: '50vh', boxShadow: "0rem 0.2rem 5rem 0.1rem gray"}} >
            <Col>
                <h2 className='text-center mt-5'>Nuestros Servicios</h2>
                <Row className='mt-4'>
                    {!isLoading &&
                        services.map((e) =>
                            <Col key={e} xs="12" md="6" lg="3" className='my-1'>
                                <Card className='p-1'>
                                    <Card.Body>
                                        <Card.Text className='text-center'><HiOutlineTruck size={30} /></Card.Text>
                                        <Card.Title className='mb-3 text-center'>{e}</Card.Title>
                                        <Card.Text className='text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore corporis voluptates illo fugit, minima quod cum rem atque adipisci saepe, aliquid quis, inventore reiciendis accusantium iste dignissimos perspiciatis reprehenderit? Asperiores?</Card.Text>
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
