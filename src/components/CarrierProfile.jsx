import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import logo from '../assets/logo.jpg'


import Image from 'react-bootstrap/Image'
import { useParams } from 'wouter'
import { findCarrierById } from '../commons/service'

// Azul oscuro (#2F4F7F)
// Gris claro (#F7F7F7)
// Verde oscuro (#3E8E41)
// Blanco (#FFFFFF)



export const CarrierProfile = () => {
    const { id } = useParams()
    const [carrierState, setCarrierState] = useState({})

    useEffect(() => {
        const data = findCarrierById(id)
        setCarrierState(data)
    }, [id])

    const style = {
        backgroundColor: '#2F4F7F',
        minHeight: '100vh'
    }


    return (
        <Container fluid style={style} >
            <Container>
                <Row style={{ minHeight: '100vh' }} className='align-items-center text-center'>
                    <Col lg='7'>
                        <h1 style={{ color: '#FFFFFF' }}>{carrierState?.carrier?.name}</h1>
                    </Col>
                    <Col>
                        <Image src={logo} width={400} roundedCircle fluid />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
