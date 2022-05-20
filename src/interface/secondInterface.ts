import Person from "./firstInterface"

interface Student extends Person {
    university: string
    speciality: string
}

export default Student;