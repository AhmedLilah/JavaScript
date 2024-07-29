let x = String("hello world!")
let y = [1, 2, 3, 4]

function isArray(x) {
        return typeof x == typeof []
}

console.log(isArray(x))
console.log(isArray(y))
