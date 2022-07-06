import {GovermentBuildingType, HousesType} from "../02/02_02";

export const getStreetTitlesOfGovermentsBuildings =
    (buildings: Array<GovermentBuildingType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetTitlesOfHouses =
    (houses: Array<HousesType>) => {
    return houses.map(b => b.address.street.title)
}

export const createMessages =
    (houses: Array<HousesType>) => {
    return houses.map(b => `Hello guys from ${b.address.street.title}`)
}

