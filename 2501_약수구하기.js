const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();

const processed = input.split(" ");
const N = +processed[0];
const k = +processed[1];

let aliquot = [1];

for(let i = 2; i <= N; i++){
  if(i * i > N) break;
  if(N % i == 0){
    aliquot = [...aliquot, i];
  }
}
const halfNum = aliquot.length;
for(let i = 0; i < halfNum; i++){
  if(aliquot[halfNum-i-1] * aliquot[halfNum-i-1] == N) continue;
  else aliquot = [...aliquot, N/aliquot[halfNum-i-1]];
}

if(aliquot.length >= k) console.log(aliquot[k-1]);
else console.log(0);
