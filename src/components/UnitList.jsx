import { units } from '../commons/data'
import Row from 'react-bootstrap/Row'
import { UnitCard } from './UnitCard'

export const UnitList = ({ query }) => {
    return (
        <Row>
            {
                units
                    .filter((e) => query == ''
                        ? units
                        : e.carrier.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || e.unit.ton.includes(query))
                    .map(({ carrier, unit }) =>
                        <UnitCard carrier={carrier} unit={unit} />
                    )
            }
        </Row>
    )
}
