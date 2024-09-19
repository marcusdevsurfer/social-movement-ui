import { units } from '../commons/data'
import Row from 'react-bootstrap/Row'
import { UnitCard } from './UnitCard'

export const UnitList = ({ query }) => {
    return (
        <Row>
            {
                units
                    .filter((unit) => query == ''
                        ? units
                        : unit.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || unit.ton.includes(query))
                    .map((unit) => <UnitCard key={unit.id} unit={unit} />)
            }
        </Row>
    )
}
