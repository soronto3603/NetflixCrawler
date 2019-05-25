const Q = require("../lib/queue");

let q = new Q.Q();
console.log(q.isEmpty());
q.push(1);
q.push(2);
q.push(5);
console.log(q.isEmpty());

console.log(q.pop(),q.pop(),q.pop());
console.log(q.isEmpty());
