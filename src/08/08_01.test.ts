
type UserType = {
    [key:string] : {id: number, name: string}
}

let users: UserType

beforeEach( ()=> {
    users = {
        '101': { id: 101, name: 'Zhalgas' },
        '21312': { id: 21312, name: 'Kamila' },
        '4564534': { id: 4564534, name: 'Suale' },
        '1': { id: 1, name: 'Zhanat' }
    }
})


test("should update corresponding user", ()=> {

    users['1'].name="Zhanat Serikovich"

    expect(users['1']).toEqual({ id: 1, name: "Zhanat Serikovich" })
})

test("should delete corresponding user", ()=> {

     delete users['1']

    expect(users['1']).toBeUndefined()
})