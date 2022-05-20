import { types } from 'mobx-state-tree'
import type { Instance } from 'mobx-state-tree'
import rootStore from './Provider.store'

const Person = types
    .model({
        id: '',
        firstName: '',
        secondName: '',
        gender: '',
        age:  types.number,
        height: types.number,
    })
    .actions((self) =>({
        updateField<Key extends keyof typeof self>(field: Key, value: typeof self[Key]) {
            self[field] = value
            rootStore.saveToLocalStorage();
        },
    }))

    export default Person

export type IPerson = Instance<typeof Person>