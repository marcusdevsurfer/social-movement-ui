import { units } from '../commons/data'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import  Badge  from 'react-bootstrap/Badge'
import img from '../assets/example.png'

export const UnitList = ({query}) => {
    return (
        <Row>
            {units
                .filter((e) => query == '' ? units : e.carrier.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || e.unit.ton.includes(query))
                .map(({ carrier, unit }) =>
                    <Col lg='4' className='p-2' key={carrier.email}>
                        <Card>
                            <Card.Header>
                                <Stack direction='horizontal'>
                                    <h5 className='m-0 text-muted'>{carrier.name}</h5>
                                    <Button className='ms-auto' variant='warning' size='sm'>Ver perfil</Button>
                                </Stack>
                            </Card.Header>

                            <Card.Body>
                                <Card.Img src={img} />
                            </Card.Body>

                            <Card.Footer>
                                <h5 className='text-muted'>Caracteristicas</h5>
                                <Stack direction='horizontal' gap={1}>
                                    <Badge className='bg-secondary'>{unit.ton} Toneladas</Badge>
                                    <Badge className='bg-secondary'>Carga suelta</Badge>
                                </Stack>
                                <h5 className='text-muted'>Contacto</h5>
                                <Stack direction='horizontal' gap={1}>
                                    <Badge className='bg-secondary'>{carrier.email}</Badge>
                                    <Badge className='bg-secondary'>{carrier.phone}</Badge>
                                </Stack>
                            </Card.Footer>
                        </Card>
                    </Col>
                )}
        </Row>
    )
}
