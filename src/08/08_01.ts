export type usersObj = {
    '0': 'Zhalgas',
    '1': 'Kamila',
    '2': 'Suale',
    '3': 'Zhanat'
}

type UserType = {
    [key:string] : {id: number, name: string}
}

export const users: UserType = {
    '101': { id: 101, name: 'Zhalgas' },
    '21312': { id: 21312, name: 'Kamila' },
    '4564534': { id: 4564534, name: 'Suale' },
    '1': { id: 1, name: 'Zhanat' }
}

//users['1']

var user = {id: 100500, name: 'Igor'}
users[user.id]= user;
delete users[user.id]

export const usersArray = [
    {id: 101, name: 'Zhalgas'},
    {id: 21312, name: 'Kamila'},
    {id: 4564534, name: 'Suale'},
    {id: 1, name: 'Zhanat'}]

//usersArray.find(u=> u.id === 1)
//var usersCopy = [...usersArray.filter(), user]
//var usersArray = usersArray.filter(u=>u.id !==user.id)