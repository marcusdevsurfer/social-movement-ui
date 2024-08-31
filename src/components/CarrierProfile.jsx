import { useEffect, useState } from 'react'
import { findCarrierById } from '../commons/service'
import { useParams } from 'wouter'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import logo from '../assets/logo.jpg'
import { CarrierCover } from './Carrier/CarrierCover'
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
    }, [id])

    const style = {
        backgroundColor: '#2F4F7F',
    }

    const serviceListItem = {
        listStyle: 'none'
    }

    return (
        <Container fluid >
            <Container>
                <CarrierCover carrierName={carrierState.name} carrierLogo={logo} />
                <Row style={{ minHeight: '45vh' }} className='align-items-center text-center'>
                    <Col lg='7'>
                        <h1>Servicios</h1>
                    </Col>
                    <Col>
                        <ul>
                            {
                                !isLoading &&
                                carrierState.services.map((e) =>
                                    <li style={serviceListItem}>{e}</li>
                                )
                            }
                        </ul>
                    </Col>
                </Row>

                <Row style={{ minHeight: '45vh' }} className='align-items-center text-center justify-content-around'>
                    <h1>Contacto</h1>
                    <Col>
                        Datos de contacto
                    </Col>
                    <Col>
                        Datos de ubicacion
                    </Col>
                </Row>

            </Container>
        </Container>
    )
}
