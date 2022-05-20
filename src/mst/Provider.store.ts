import { types } from "mobx-state-tree";
import Person from './Person.model';
import Student from './Student.model';

export const Root = types
    .model({
        persons: types.optional(types.array(Person), []),
        students: types.optional(types.array(Student), []),
        isFetchedWithLocalStorage: false
    })
    .actions((self) => ({
        updateField<Key extends keyof typeof self>(field: Key, value: typeof self[Key]) {
            self[field] = value
            this.saveToLocalStorage();
        },
        getPersonById(id: string){
            return self.persons.filter(item=>item.id===id)[0]
        },
        saveToLocalStorage() {
            localStorage && localStorage.setItem('Lab5_Data', JSON.stringify({persons:self.persons, students:self.students}))
        },
        clearLocalStorage(){
            localStorage && localStorage.setItem('Lab5_Data', JSON.stringify({persons:[], students: []}))
        },
        setLocalStorageTestData() {
            localStorage && localStorage.setItem('Lab5_Data', JSON.stringify(initialState))
            setTimeout(() => window.location.reload(), 2000);
            
        }
    }))
    .actions((self) => ({
        getLocalStorage(){
            const isLSData = localStorage && localStorage.getItem('Lab5_Data')
            const lsData = isLSData ? JSON.parse(localStorage.getItem('Lab5_Data') || '') : {}
            if(!self.isFetchedWithLocalStorage){
                if(lsData && lsData.persons && lsData.persons.length === 0 && lsData.students && lsData.students.length === 0) {
                    self.saveToLocalStorage()
                }
                else {
                    self.updateField("persons", lsData.persons || [])
                    self.updateField("students", lsData.students || [])
                }
                self.isFetchedWithLocalStorage = true
            }
            return lsData
        },
    }))
 

const rootStore = Root.create({})
const initialState = {
    persons: [
        {
            id: 'p-001',
            firstName: "Victor",
            secondName:"Plesca",
            gender:"male",
            age:21,
            height:200
        },
        {
            id: 'p-002',
            firstName: "Dragos",
            secondName:"Druta",
            gender:"male",
            age:31,
            height:300
        },
        {
            id: 'p-003',
            firstName: "Silviu",
            secondName:"Stavila",
            gender:"male",
            age:12,
            height:190
        },
    ],
    students: [
    {
        id: 'st-001',
        personId: 'p-001',
        university: "USM",
        speciality:"IA"
    },
    {
        id: 'st-002',
        personId: 'p-002',
        university: "UASM",
        speciality:"Contabilitate"
    },
    {
        id: 'st-003',
        personId: 'p-003',
        university: "UTM",
        speciality:"RM"
    }
    ]
}
export default rootStore