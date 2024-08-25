import img from '../assets/example.png'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { units } from '../commons/data'

export const UnitsBox = () => {
    const [query, setQuery] = useState('')
    return (
        <Container style={{ minHeight: '100vh' }} fluid className='bg-tertiary'>
            <Container>
                <Form className='mb-2'>
                    <Form.Group>
                        <Stack direction='horizontal'>
                            <Form.Control value={query} placeholder='Busqueda (Ej: 3.5 toneladas, Transportes Flores)' onChange={(e) => setQuery(e.target.value)}></Form.Control>
                        </Stack>
                    </Form.Group>
                </Form>
                <Row>
                    {units
                        .filter((e) => query == '' ? units : e.carrier.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || e.unit.ton.includes(query))
                        .map(({ carrier, unit }) =>
                            <Col lg='4' className='p-2'>
                                <Card>
                                    <Card.Header>
                                        <Stack direction='horizontal'>
                                            <h5 className='m-0 text-muted'>{carrier.name}</h5>
                                            <Button className='ms-auto' variant='success' size='sm'>Ver perfil</Button>
                                        </Stack>
                                    </Card.Header>

                                    <Card.Body>
                                        <Card.Img src={img} />
                                    </Card.Body>

                                    <Card.Footer>
                                        <h5 className='text-muted'>Caracteristicas</h5>
                                        <Stack direction='horizontal' gap={1}>
                                            <Badge>{unit.ton} Toneladas</Badge>
                                            <Badge>Carga suelta</Badge>
                                        </Stack>
                                        <h5 className='text-muted'>Contacto</h5>
                                        <Stack direction='horizontal' gap={1}>
                                            <Badge>{carrier.email}</Badge>
                                            <Badge>{carrier.phone}</Badge>
                                        </Stack>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )}
                </Row>
            </Container>
        </Container>
    )
}
