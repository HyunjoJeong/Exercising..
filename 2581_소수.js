const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const a = Number(input[0]);
const b = Number(input[1]);

let answers = [];

for (let i=a; i<=b; i++){
  if(i===2 || i===3) {
    answers = [...answers, i];
  }
  else{
    const last = Math.floor(Math.sqrt(i));
    for(let j=2; j<=last; j++){
      if(i % j === 0) break;
      if(j === last) {
        answers = [...answers, i];
      }
    }
  }
}

if(answers.length === 0){
  console.log(-1);
}
else {
  const sum = answers.reduce((acc, curr) => {
    return acc += curr;
  }, 0);
  console.log(sum);
  console.log(answers[0]);
}