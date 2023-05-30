const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();

const processed = input.split("\n");
const [N, ...inputs] = processed;
const n = +N;

for(let i=0; i<n; i++){
  let input = Number(inputs[i]);
  let indices = [];
  while (input !== 0) {
    const index = max_index(input);
    input -= Math.pow(2, index);
    indices = [...indices, index];
  }
  indices.reverse();
  const out = indices.join(" ");
  console.log(out);
}

function max_index (input) {
  let i=1;
  let n=0;
  while(i*2 <= input){
    i *= 2;
    n += 1;
  }
  return n;
}