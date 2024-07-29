async function getSomeData() {
        console.log("strting the async function")
        setTimeout(()=>{ return new Promise()} , 10000)
        return "Promise"
}

console.log("strting experiment")
let p = await getSomeData()
console.log("doing somework in main")

p.then((data) => {
        console.log(data)
})
