

function increaseAge(u:userType){
    u.age++
}

type userType = {
    name:string
    age:number
    address: {title:string}
}

test('reference type test', ()=>{
    var user ={
        name: 'Dimych',
        age: 32,
        address: {
            title:'Minsk'
        }
    }
    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('reference array test', ()=>{
    var users =[
        {
        name: 'Dimych',
        age: 32
    },
        {
        name: 'Dimych',
        age: 32
    },
    ]

    var admins= users

    admins.push({name: 'Bandyugan', age:10})

    expect(users[2]).toEqual({name: 'Bandyugan', age:10})


})

test('value type test', ()=>{

    var usersCount = 1000

    var adminsCount = usersCount


    adminsCount = adminsCount+1

    expect(users[2]).toEqual({name: 'Bandyugan', age:10})


})

test('referenc type test', ()=>{
    const address = {
        title: 'Minsk'
    }
    var user ={
        name: 'Dimych',
        age: 32,
        address: address
    }
    var user2:userType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user,user2,{name:'Misha', age:18, address: address}]

    address.title='Minsk City'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Minsk City')

})

test('sort array test', ()=>{
    const letters = ['c', 'd', 'a', 'z', 'e']

    passportist(letters)

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])


})

function passportist(letters: any){

    letters.sort()
    console.log(letters)
}