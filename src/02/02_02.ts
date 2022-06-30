

export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HousesType = {
    id?: number
    buildedAt: number
    repaired: false
    address: AddressType
}

export type GovermentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    govermentBuilding: Array<GovermentBuildingType>
    citizensNumber: number
}

