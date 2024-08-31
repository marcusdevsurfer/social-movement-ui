import { useEffect, useState } from 'react'
import { findCarrierById } from '../commons/service'
import { useParams } from 'wouter'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import logo from '../assets/logo.jpg'
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


    return (
        <Container fluid >
            <Container>
                <Row style={{ minHeight: '95vh' }} className='align-items-center text-center'>
                    <Col lg='7'>
                        <h1>{carrierState?.name}</h1>
                    </Col>
                    <Col>
                        <Image src={logo} width={400} roundedCircle fluid />
                    </Col>
                </Row>
                <Row>
                    <ul>
                        {
                            !isLoading &&
                            carrierState.services.map((e) =>
                                <li>{e}</li>
                            )
                        }
                    </ul>
                </Row>
            </Container>
        </Container>
    )
}
