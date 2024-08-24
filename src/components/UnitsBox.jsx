import img from '../assets/example.png'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




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
            name: 'Transportes Manzanillo',
            email: 'transportesmanzanillo@gmail.com',
            phone: '3148765544'
        },
        unit: {
            ton: '4.0',
            service: ''
        }
    }

]



export const UnitsBox = () => {
    return (
        <Container fluid className='bg-secondary'>
            <Container className='p-1'>
                {units.map(({ carrier, unit }) =>
                    <Card className='m-2'>
                        <Card.Header>
                            <Stack direction='horizontal' gap='2'>
                                <h5 className='m-0'>{carrier.name}</h5>
                                <Card.Link>Ver perfil</Card.Link>
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
            </Container>
        </Container>
    )
}
