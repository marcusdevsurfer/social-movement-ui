import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './carrierCover.css'
import { useEffect } from 'react'

export const CarrierCover = ({ carrierName, carrierLogo, carrierSlogan }) => {

    // useEffect(() => {
    //     setInterval(() => console.log("Interval funcionando..."), 2500)

    //     return clearInterval()
    // }, [])

    //Titulos
    const titleColor = '#020817'
    //Letra de subtitulo
    const subtitle = '#5E6D82'

    return (
        <Row className='align-items-center hero'>
            <Col sm="12" md="6" lg="6" className='p-5'>
                <h1 style={{ color: titleColor }} className='text-start'>{carrierName}</h1>
                <p className='text-start' style={{ textAlign: 'justify', color: subtitle }}>{carrierSlogan}</p>
            </Col>
            <Col className='text-center'>
                <Image src={carrierLogo}  width={350} roundedCircle fluid />
            </Col>
        </Row>
    )
}
