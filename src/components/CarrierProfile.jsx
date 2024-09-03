import { useEffect, useState } from 'react'
import { findCarrierById } from '../commons/service'
import { useParams } from 'wouter'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import logo from '../assets/logo.jpg'
import { CarrierCover } from './CarrierCover'
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { CarrierServices } from './CarrierServices'

// Azul oscuro (#2F4F7F)
// Gris claro (#F7F7F7)
// Verde oscuro (#3E8E41)
// Blanco (#FFFFFF)

export const CarrierProfile = () => {
    const { id } = useParams()
    const [carrierState, setCarrierState] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const data = findCarrierById(id)
        setCarrierState(data)
        setIsLoading(false)
    }, [])

    return (
        carrierState
            ?
            <Container fluid >
                <CarrierCover carrierName={carrierState.name} carrierLogo={logo} carrierSlogan={carrierState.slogan} />
                <CarrierServices services={carrierState.services} isLoading={isLoading} />
                <Container>
                    <Row style={{ minHeight: '45vh' }} className='align-items-center'>
                        <h1 className='text-center'>Contacto</h1>
                        <Col>
                            <p>
                                <HiOutlineMail /> {carrierState.email}
                            </p>
                            <p>
                                <HiOutlinePhoneOutgoing /> {carrierState.phone}
                            </p>
                        </Col>
                        <Col className='text-end'>
                            Datos de ubicacion
                        </Col>
                    </Row>
                </Container>
            </Container>
            :
            <h3>Not found</h3>
    )
}
