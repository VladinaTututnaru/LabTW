import { types } from 'mobx-state-tree'
import type { Instance } from 'mobx-state-tree'
import {IPerson} from './Person.model'
import rootStore from './Provider.store'
const Student = types
    .model({
        id: '', 
        personId: '',
        university: '',
        speciality: '',
    })
    .actions((self) =>({
        updateField<Key extends keyof typeof self>(field: Key, value: typeof self[Key]) {
            self[field] = value
            rootStore.saveToLocalStorage();
        },
    }))
    .views((self) => ({
        get personData(): IPerson{
            return rootStore.getPersonById(self.personId)
        }
    }))

export default Student

export type IStudent = Instance<typeof Student>