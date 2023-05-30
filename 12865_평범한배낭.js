const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const N = +input[0].split(" ")[0];
const maxW = +input[0].split(" ")[1];

let cases = [];
for(let i=1; i<=N; i++) {
  cases.push([Number(input[i].split(" ")[0]), Number(input[i].split(" ")[1])]);
}
for(let i=0; i<N-1; i++) {
  for(let j=i+1; j<N; j++) {
    if(cases[i][0] > cases[j][0]) {
      [cases[i], cases[j]] = [cases[j], cases[i]];
    }
  }
}
let caseSet = new Map();
for(let i=0; i<N; i++) {
  caseSet.set(cases[i][0], cases[i][1]);
}
console.log(caseSet);
let matrix = [];
for(let i=0; i<=cases[N-1][0]; i++) {
  let row = [];
  for(let j=0; j<=maxW; j++) {
    row.push(0);
  }
  matrix.push(row);
}
// console.log(matrix); // 7*8 짜리 (물체/최대무게)
let maximum = 0;
for(let i=cases[0][0]; i<=cases[N-1][0]; i++) {
  for(let j=cases[0][0]; j<=maxW; j++) {
    if(i <= j){
      if(caseSet.has(i) && (caseSet.get(i) + matrix[i-1][j-i]) > matrix[i-1][j]) {
        matrix[i][j] = caseSet.get(i) + matrix[i-1][j-i];
      } else {
        matrix[i][j] = matrix[i-1][j]
      }
    } else {
      matrix[i][j] = matrix[i-1][j];
    }
    if(maximum < matrix[i][j]) maximum = matrix[i][j];
  }
}
// console.log(matrix);
console.log(maximum)