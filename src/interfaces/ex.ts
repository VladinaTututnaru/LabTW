export {}

// let str = ''
// let str: string
// let num: number = 0
// let ts: [string, number] = []

// function funDec(arg: string): string {
//     return arg
// }

// const arrFunc = (arg: string): string => {
//     return arg
// }

interface IObj {
    title: string
    age: number | string | undefined
    // age?: number | string
}

const obj: IObj = {
    title: 'Title',
    age: 70,
}


//Extinderea interfetii
// interface IObj1 extends IObj {
//     desc: string
// }
//


