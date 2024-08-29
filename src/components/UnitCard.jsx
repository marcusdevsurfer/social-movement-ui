import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import Badge from 'react-bootstrap/Badge'
import img from '../assets/example.png'
import { Link } from "wouter";

export const UnitCard = ({ carrier, unit }) => {
    return (
        <Col lg='4' className='p-2' key={carrier.email}>
            <Card>
                <Card.Header style={{ backgroundColor: '#FFFFFF' }}>
                    <Stack direction='horizontal'>
                        <h5 className='m-0'>{carrier.name}</h5>
                        <Link style={{ backgroundColor: '#F7F7F7' }} className='btn btn-sm ms-auto' href="/profile">Ver perfil</Link>
                    </Stack>
                </Card.Header>

                <Card.Body>
                    <Card.Img src={img} />
                </Card.Body>

                <Card.Footer>
                    <h5 className='m-0'>Caracteristicas</h5>
                    <Badge className='bg-secondary'>{unit.ton} Toneladas</Badge>
                    <Badge className='bg-secondary ms-1'>Carga suelta</Badge>
                    <h5 className='m-0'>Contacto</h5>
                    <Badge className='bg-secondary'>{carrier.email}</Badge>
                    <Badge className='bg-secondary ms-1'>{carrier.phone}</Badge>
                </Card.Footer>
            </Card>
        </Col>
    )
}
