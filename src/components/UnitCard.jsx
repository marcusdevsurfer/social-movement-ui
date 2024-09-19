import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { useLocation } from "wouter";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import './unitcard.css'

export const UnitCard = ({ unit }) => {
    const [location, setLocation] = useLocation()
    return (
        <Col md='6' lg='4' className='p-2' key={unit.id}>
            <Card key={unit.id}>
                <Card.Header style={{ backgroundColor: '#FFFFFF' }}>
                    <Card.Img src={unit?.image} />
                </Card.Header>
                <Card.Body>
                    <h5 className='fw-700'>{`${unit?.name}, ${unit?.model}`}</h5>
                    <Stack gap={2} direction='horizontal'>
                        <span className='unit-badge'>{unit.ton} Toneladas</span>
                        <span className='unit-badge'>Carga suelta</span>
                    </Stack>
                    <h5 className='fw-700'>Contacto</h5>
                    <Stack gap={2} direction='horizontal'>
                        <span className='unit-badge'><HiOutlineMail /> {unit.carrier.email}</span>
                        <span className='unit-badge'><HiOutlinePhoneOutgoing /> {unit.carrier.phone}</span>
                    </Stack>
                </Card.Body>
                <Card.Footer>
                    <Stack>
                        <Button variant='dark' size='sm' onClick={() => setLocation('/profile/' + carrier?.id)}>Ver Perfil</Button>
                    </Stack>
                </Card.Footer>
            </Card>
        </Col>
    )
}
