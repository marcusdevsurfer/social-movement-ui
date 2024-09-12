import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import { Link } from "wouter";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import './unitcard.css'


export const UnitCard = ({ carrier, unit }) => {
    return (
        <Col lg='4' className='p-2' key={unit.id}>
            <Card key={unit.id}>
                <Card.Header style={{ backgroundColor: '#FFFFFF' }}>
                    <Card.Img src={unit.image} />
                </Card.Header>
                <Card.Body>
                    <h5 className='fw-700'>{carrier.name}</h5>
                    <Stack gap={2} direction='horizontal'>
                        <span className='unit-badge'>{unit.ton} Toneladas</span>
                        <span className='unit-badge'>Carga suelta</span>
                    </Stack>
                    <h5 className='fw-700'>Contacto</h5>
                    <Stack gap={2} direction='horizontal'>
                        <span className='unit-badge'><HiOutlineMail /> {carrier.email}</span>
                        <span className='unit-badge'><HiOutlinePhoneOutgoing /> {carrier.phone}</span>
                    </Stack>
                </Card.Body>
                <Card.Footer>
                    <Stack>
                        <Link className='btn-sm btn btn-secondary' to={'/profile/' + carrier.id}>Ver perfil</Link>
                    </Stack>
                </Card.Footer>
            </Card>
        </Col>
    )
}
