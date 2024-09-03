import Container from 'react-bootstrap/Container'
import { useState } from 'react'
import { FindBar } from './FindBar'
import { UnitList } from './UnitList'

export const UnitsBox = () => {
    const [query, setQuery] = useState('')
    return (
        <Container style={{ minHeight: '95vh', backgroundColor: '#F7F7F7' }} fluid>
            <Container>
                <FindBar query={query} setQuery={setQuery} />
            </Container>
            <Container>
                <UnitList query={query} />
            </Container>
        </Container>
    )
}
