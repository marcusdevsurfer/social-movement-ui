import { useEffect, useState } from 'react'
import { useParams } from 'wouter'
import Container from 'react-bootstrap/Container'
import { CarrierCover } from './CarrierCover'
import { CarrierServices } from './CarrierServices'
import { CarrierContact } from './CarrierContact'
import { getCarrierById } from '../service/carrierService'

export const CarrierProfile = () => {
    const { id } = useParams()
    const [carrierState, setCarrierState] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setCarrierState(getCarrierById(id))
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
