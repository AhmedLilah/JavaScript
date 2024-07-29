import "module.js";

function main() {
        const size = 1_000;
        let rand = [];
        for (let i=0; i<size; i++) {
                rand.push(Math.random() * 10);
        }

        let sorted = structuredClone(rand);
        sorted.sort();

        for (let i=0; i<size; i++) {
                console.log("Original: " +  rand[i] + "\t Sorted: " + sorted[i]);
        }

        sayHello();
}

main()
