import { units } from "./data"

export const findCarrierById = (id) => {
    return units.find((e) => e.carrier.id == id)
}