import { carriers } from "../commons/data"

export const getAllCarriers = () => carriers

export const getCarrierById = (id) => {
    return carriers.find((carrier) => carrier.id == id)
}