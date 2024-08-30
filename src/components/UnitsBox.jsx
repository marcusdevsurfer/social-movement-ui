import Container from 'react-bootstrap/Container'
import { useState } from 'react'
import { FindBar } from './FindBar'
import { UnitList } from './UnitList'
import { CarrierProfile } from './CarrierProfile'
// Azul oscuro (#2F4F7F)
// Gris claro (#F7F7F7)
// Verde oscuro (#3E8E41)
// Blanco (#FFFFFF)

export const UnitsBox = () => {
    const [query, setQuery] = useState('')
    return (
        <Container style={{ minHeight: '95vh', backgroundColor: '#2F4F7F' }} fluid>
            <Container >
                <FindBar query={query} setQuery={setQuery} /> 
                <UnitList query={query} />
            </Container>
        </Container>
    )
}
