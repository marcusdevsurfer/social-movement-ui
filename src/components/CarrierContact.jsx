import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack';
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";

export const CarrierContact = ({ email, phone }) => {
    return (
        <Row style={{ minHeight: '25vh', backgroundColor: '#F7F7F7' }}>
            <h2 className='text-center mt-5 mb-3'>Contacto</h2>
            <Col className='text-center'>
                <Stack gap={1}>
                    <span><HiOutlineMail size={17} className='me-1'  /> {email}</span>
                    <span><HiOutlinePhoneOutgoing size={17} className='me-1' />{phone}</span>
                </Stack>
            </Col>
            <Col className='text-center'>
                <p className='m-0'>Manzanillo, Colima</p>
                <HiLocationMarker size={17} />
            </Col>
        </Row>
    )
}
