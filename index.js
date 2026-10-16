
function outputNamaQueue() {
    
    const people = [
        {
            name: "John",
            waiting_time: 1500
        },
        {
            name: "Ed",
            waiting_time: 2000
        },
        {
            name: "Jane",
            waiting_time: 500
        }
    ];
    const promise_results = [];
    for (let { name, waiting_time } of people) {
        promise_results.push(
            new Promise((res, rej) => {
                if(waiting_time < 0){
                    rej(`"${name}" waiting time cannot be negative`);
                }
                setTimeout(() => {
                    res(name);
                }, waiting_time);
            })
        );
    }
    return promise_results;
}

const [q1,q2,q3] = outputNamaQueue();

q1.then(console.log).catch(console.log);
q2.then(console.log).catch(console.log);
q3.then(console.log).catch(console.log);

