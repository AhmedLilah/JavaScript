// importing moduleas
import {shout} from './module.mjs'

// logging to the console
console.log("Hello world!")

// variable instanciation
let x = 30
const y = 40

x = 40
// y = 50 // not allowed and should error out

// "data types"
let num = 10
let str = 'Hello World'
let bool = true

// object
let obj = {X : 10, Y : 10}

// array
let arr = [10, 'hello', 5.9, true]


// fucntions declarations
function add(x, y) {
        return x+y
}

const multiply = (x, y) => x * y

// destructurring objects
const {X, Y} = obj
console.log("Destructuring object: ")
console.log(X)
console.log(Y)

// destructuring arrays
const [A, B] = arr
console.log("Destructuring arrays: ")
console.log(A)
console.log(B)


// if statement
if (x > y) {
        console.log("x is grater than y")
} else {
        console.log("x is not greater than y")
}

// for loop
console.log("entering for loop")
for (let i =0; i < 10; ++i) {
        console.log(i)
}

let j = 0
console.log("entering while loop")
while (true) {
       if (j > 4) {
                console.log("breaking out of the while loop")
                break
        }
        j++
        console.log(j)
}

// spread operator 
console.log(...arr)

// classes
class Circle {
        constructor (radius) {
                this.radius = radius
        }

        area() {
                return this.radius * this.radius * 3.14
        }
}


let circle = new Circle(1)
console.log("the circle area is: ", circle.area())


// using moduleas
shout()



class BinaryNdoe {
        constructor () {
                this.data = undefined
                this.left = undefined
                this.right = undefined

        }              
}

class BinarTree {
        constructor() {
                this.root = undefined
        }
}

function nonAsyncFunction() {
        console.log("function called")
}

async function testAsync(fn) {
        await new Promise(resolve => setTimeout(resolve, 5000))
        fn()
        await console.log("test done")
}

testAsync(nonAsyncFunction)
