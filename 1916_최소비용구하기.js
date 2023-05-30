const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const cityNum = Number(input[0]);
const busNum = Number(input[1]);
let edges = [];
for (let i=0; i<busNum; i++) {
  let edge = [];
  edge = [...edge, +input[i+2].split(" ")[0]];
  edge = [...edge, +input[i+2].split(" ")[1]];
  edge = [...edge, +input[i+2].split(" ")[2]];
  edges = [...edges, edge];
}
const start = Number(input[busNum+2].split(" ")[0]);
const end = Number(input[busNum+2].split(" ")[1]);

// initializing.
let costs = [];
for (let i=0; i<cityNum; i++){
  costs = [...costs, 0];
}

let routes = [start];
for(let i=0; i<busNum; i++){
  for(let j=0; j<routes.length; j++){
    if(routes[j] === edges[i][0]){
      if(costs[edges[i][1]-1] > costs[edges[i][0]-1] + edges[i][2] || costs[edges[i][1]-1] === 0){
        if(costs[edges[i][1]-1] === 0) {
          routes = [...routes, edges[i][1]];
        }
        costs[edges[i][1]-1] = costs[edges[i][0]-1] + edges[i][2];
        break;
      }
    }
  }
}

console.log(costs);
console.log(costs[end-1]);