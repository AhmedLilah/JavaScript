const {Worker, parentPort} = require('worker_threads')


const doFib = async (iterations) => {
        return new Promise ((resolve, reject) => {
                const start = Date.now()
                // --- start worker 
                const worker = new Worker('./fib.js', {
                        workerData: {
                                iterations
                        }
                })

                // ---- Listen for message from worker
                worker.once('message', (data) => {
                        console.log(`worker [${worker.threadId}]: done in ${Date.now() - start}`)
                        resolve(data)
                })

                // ---- Listen for error from worker
                worker.once('error', (err) => reject(err))
        })
}

const main = async() => {
        try {
                const start = Date.now()
                const values = await Promise.all([
                        doFib(40),
                        doFib(40),
                        doFib(40),
                        doFib(40)
                ]) 

                console.log('values', values)

                console.log(`fib done in ${Date.now() - start}ms`)
        } catch (err) {
                console.error(err)
        }
}

main()
