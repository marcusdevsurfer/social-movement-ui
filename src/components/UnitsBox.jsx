import Container from 'react-bootstrap/Container'
import { useState } from 'react'
import { FindBar } from './FindBar'
import { UnitList } from './UnitList'

export const UnitsBox = () => {
    const [query, setQuery] = useState('')
    return (
        <Container style={{ minHeight: '100vh' }} fluid className='bg-tertiary'>
            <Container>
                <FindBar query={query} setQuery={setQuery} />
                <UnitList query={query} />
            </Container>
        </Container>
    )
}
