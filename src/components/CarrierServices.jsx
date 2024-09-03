import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const CarrierServices = ({ services, isLoading }) => {

    const serviceListItem = {
        listStyle: 'none'
    }

    return (
        <Row style={{ minHeight: '45vh' }} className='align-items-center text-center'>
            <Col>
                <h1>Servicios</h1>
                <ul>
                    {
                        !isLoading &&
                        services.map((e) =>
                            <li style={serviceListItem}>{e}</li>
                        )
                    }
                </ul>
            </Col>
        </Row>
    )
}
