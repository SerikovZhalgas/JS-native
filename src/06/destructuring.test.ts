import exp from "constants";

type ManType = {
    name: string
    age: number,
    lessons: Array<{title: string; name?:string}>
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType;

beforeEach(()=>{
    props = {
        name: "Kamila",
        age: 24,
        lessons: [{title: '1'}, {title: '2'},{title: '3', name: 'react'}],
        address: {
            street: {
                title: "Uly-dala"
            }
        }
    }
})

test("", () => {

    const{age, lessons} = props
    const {title} = props.address.street

    // const age = props.age
    // const lessons = props.lessons

    expect(age).toBe(24)
    expect(lessons.length).toBe(3)

    expect(title).toBe("Uly-dala")


})

test("", () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [,ls2, ...restLessons] = props.lessons


    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    //expect(ls1.title).toBe('1')
    //expect(ls1.title).toBe('1')

    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe("3")
    expect(restLessons[0].name).toBe("react")

    expect(restLessons[0]).toStrictEqual({title: '3', name: 'react'})
})