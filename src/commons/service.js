import {  carriers } from "./data"

// export const findCarrierById = (id) => {
//     return units.find((e) => e.carrier.id == id)
// }


export const findCarrierById = (carrierId) => {
    return carriers.find((e) => e.id == carrierId)
} 