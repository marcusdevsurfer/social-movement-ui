import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import logo from '../assets/logo.jpg'


import Image from 'react-bootstrap/Image'

// Azul oscuro (#2F4F7F)
// Gris claro (#F7F7F7)
// Verde oscuro (#3E8E41)
// Blanco (#FFFFFF)



export const CarrierProfile = () => {

    const data = {
        carrier: {
            name: 'Transportes Flores',
            email: 'transportesflores@gmail.com',
            phone: '3141986645',
            services: [
                ''
            ]
        },
        unit: {
            ton: '3.5',
            service: ''
        }
    }

    const style = {
        backgroundColor: '#2F4F7F',
        minHeight: '100vh'
    }


    return (
        <Container fluid style={style} >
            <Container>
                <Row style={{minHeight: '100vh'}} className='align-items-center text-center'>
                    <Col lg='7'>
                        <h1 style={{ color: '#FFFFFF' }}>{data?.carrier?.name}</h1>
                    </Col>
                    <Col>
                        <Image src={logo} width={400} roundedCircle fluid />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
