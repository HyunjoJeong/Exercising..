const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const V_E = input[0].split(" ");
const V_NUM = Number(V_E[0]);
const E_NUM = Number(V_E[1]);


let edges = [];
for (let i=0; i<E_NUM; i++) {
  let edge = [];
  edge = [...edge, +input[i+1].split(" ")[0]];
  edge = [...edge, +input[i+1].split(" ")[1]];
  edge = [...edge, +input[i+1].split(" ")[2]];
  edges = [...edges, edge];
}

function sort(edges) {
  for(let i=0; i<E_NUM-1; i++) {
    for(let j=i+1; j<E_NUM; j++){
      if(edges[i][2] > edges[j][2]) {
        [edges[i], edges[j]] = [edges[j], edges[i]];
      }
    }
  }
}
sort(edges);

let parent = [0];
for (let i=1; i<=V_NUM; i++) {
  parent = [...parent, i];
}

function find_parent(me) {
  while(me !== parent[me]) {
    me = parent[me];
  }
  return me;
}

function merge(node1, node2) {
  const parent1 = find_parent(node1);
  const parent2 = find_parent(node2);
  if (parent1 < parent2) parent[parent2] = parent1;
  else parent[parent1] = parent2;
}

let totalCost = 0;
for(let i=0; i<E_NUM; i++){
  if(find_parent(edges[i][0]) !== find_parent(edges[i][1])){
    merge(edges[i][0], edges[i][1]);
    totalCost += edges[i][2];
  }
}

console.log(totalCost);