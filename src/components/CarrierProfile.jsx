import { useEffect, useState } from 'react'
import { findCarrierById } from '../commons/service'
import { useParams } from 'wouter'
import Container from 'react-bootstrap/Container'
import { CarrierCover } from './CarrierCover'
import { CarrierServices } from './CarrierServices'
import { CarrierContact } from './CarrierContact'

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
                <CarrierCover carrierName={carrierState.name} carrierLogo={carrierState.picture} carrierSlogan={carrierState.slogan} />
                <CarrierServices services={carrierState.services} isLoading={isLoading} />
                <CarrierContact email={carrierState.email} phone={carrierState.phone} />
            </Container>
            :
            <h3>Not found</h3>
    )
}
