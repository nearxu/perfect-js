const random = arr => arr.sort(() => Math.random() - 0.5);

const similar = (a, b) => a.filter(v => a.incluede(b));

const sleep = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

console.log(sleep(3000))