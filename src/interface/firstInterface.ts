interface Person {
    firstName:string
    secondName:string
    gender:string
    age:number
    height:number
}
interface Student extends Person {
    university: string
    speciality: string
}

export default Student;