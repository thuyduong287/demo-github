// 1: let, const
//const: hằng số, giá trị của nó không thay đổi
const PI = 3.14
const MAX_USER = 100

// 2: arrow function
//ES5 cũ
// function addTwoNumber(a: number, b: number): number{
//     return a + b
// }

//ES6
//() => {}
const addTwoNumber = (a: number, b: number): number => {
    return a + b;
}

// 3: template string
let name1 = "John"
let age1 = 30

let message = `Hello ${name1}, you are ${age1}`
console.log(message)


// 4: destructuring
const person = {
    name: 'John',
    age: 30,
    gender: 'Male',
    occupation: 'Developer'
}

const {name: namePerson, age} = person
console.log(namePerson, age)

const colors = ["red", "green", "blue"]
const [redColor, greenColor] = colors
console.log(redColor, greenColor)
//let name = person.name


// 5: default parameter
// lợi ích
// - làm cho hàm dễ đọc hơn, ngắn gọn hơn
// - maintain những hàm có sẵn mà muốn thêm logic mới vào

const waitForElement = async (timeout: number = 500) => {
    setTimeout(() => {
        console.log(`WWaited for ${timeout} ms`)
    }, timeout)
}
waitForElement()

const greet = (name: string = "Unknown"): void => {
    console.log(`Hello ${name}`)
}
greet()
greet("Alice")

// 6: rest parameter
// ít dùng cho playwright
//thu thập các parameter thành 1 mảng trong hàm
const sumAll = (...numbers: number[]) => {
    let total = 0
    for(let num of numbers){
        total += num
    }
    return total
}
console.log(sumAll(5,6))
console.log(sumAll(4,5,6))
console.log(sumAll(5,6,7,8))

// 7: spread operator
// gộp nhiều mảng -> 1 mảng, gộp nhiều object -> 1 object
//Lưu ý: không làm thay đổi mảng ban đầu
//TH1: gộp nhiều mảng -> 1 mảng
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const arrayMerge = [...array1, ...array2]
console.log(arrayMerge)

//TH2: gộp nhiều object -> 1 object
const obj1 = {
    name: 'Phương',
    age: 20
}

const obj2 = {
    gender: 'Male',
    occupation: 'Developer'
}
const objMerge = {...obj1, ...obj2}
console.log(objMerge)

// 8: async/await: bất đồng bộ- gặp nhiều trong playwright

// 9: module: import/export 