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

const units = [
    {
        carrier: {
            name: 'Transportes Flores',
            email: 'transportesflores@gmail.com',
            phone: '3141986645'
        },
        unit: {
            ton: '3.5',
            service: ''
        }
    },
    {
        carrier: {
            name: 'Transportes Manzanillo',
            email: 'transportesmanzanillo@gmail.com',
            phone: '3148765544'
        },
        unit: {
            ton: '4.0',
            service: ''
        }
    }
    ,
    {
        carrier: {
            name: 'Juan Ramos',
            email: 'juanramos@gmail.com',
            phone: '3148765544'
        },
        unit: {
            ton: '5.0',
            service: ''
        }
    }
    ,
    {
        carrier: {
            name: 'JASEZA',
            email: 'jaseza@gmail.com',
            phone: '3148765544'
        },
        unit: {
            ton: '4.0',
            service: ''
        }
    }
    ,
    {
        carrier: {
            name: 'Transportes Roman',
            email: 'transportesroman@gmail.com',
            phone: '3148765544'
        },
        unit: {
            ton: '7.0',
            service: ''
        }
    }

]



export const UnitsBox = () => {
    const [query, setQuery] = useState('')

    return (
        <Container style={{ minHeight: '100vh' }} fluid className='bg-tertiary'>
            <Container>
                <Row className='p-1'>
                    <Col lg='4' className='my-1 p-0'>
                        <Form onSubmit={(e) => alert(e)}>
                            <Form.Group>
                                <Stack direction='horizontal'>
                                    <Form.Control value={query} placeholder='Busqueda (Ej: 3.5 toneladas, Transportes Flores)' onChange={(e) => setQuery(e.target.value)}></Form.Control>
                                </Stack>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col className='p-1'>
                        {units
                            .filter((e) => query == '' ? units : e.carrier.name.includes(query) || e.unit.ton.includes(query))
                            .map(({ carrier, unit }) =>
                                <Card className='mb-2'>
                                    <Card.Header>
                                        <Stack direction='horizontal' gap='2'>
                                            <h5 className='m-0'>{carrier.name}</h5>
                                            <a href="">Ver perfil</a>
                                            <Button size='sm'>Ver perfil</Button>
                                        </Stack>
                                    </Card.Header>

                                    <Card.Body>
                                        <Card.Img variant="bottom" src={img} />
                                    </Card.Body>

                                    <Card.Footer>
                                        <h5>Especificaciones</h5>
                                        <Stack direction='horizontal' gap={1}>
                                            <Badge>{unit.ton} Ton</Badge>
                                            <Badge>Carga suelta</Badge>
                                        </Stack>

                                        <h5>Contacto</h5>
                                        <Stack direction='horizontal' gap={1}>
                                            <Badge>{carrier.email}</Badge>
                                            <Badge>{carrier.phone}</Badge>
                                        </Stack>
                                    </Card.Footer>
                                </Card>
                            )}
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
