import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import img from '../assets/example.png'

export const UnitCard = ({carrier, unit}) => {
    return (
        <Col lg='4' className='p-2' key={carrier.email}>
            <Card>
                <Card.Header>
                    <Stack direction='horizontal'>
                        <h5 className='m-0'>{carrier.name}</h5>
                        <Button style={{backgroundColor: '#3E8E41', borderColor: 'transparent'}} className='ms-auto' size='sm'>Ver perfil</Button>
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
    )
}
