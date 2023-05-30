const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();

/**
 * 필요한 기능
 * 1. 입력이 올바른지.
 * 2. 올바른 입력일 경우 계산을 어떻게 수행할 것인가?
 */

const len = input.length;
let stack = [];
let error = false;
let calc = 0;
let part = 1;

for(let i=0; i<len; i++){
  if(input[i] === '(' || input[i]=== '['){                           // (, [
    // part = (input[i] === '(') ? 2 : 3;
    stack = [...stack, input[i]];
  }
  else if(input[i] === ')'){                                         // )
    if(stack.length === 0 || stack[stack.length-1] !== '('){
      error = true;
      break;
    }
    else {                                                           // () 가 쌍으로 만남 
      if(i+1 < len){
        part *= 2;
        if(input[i+1] === '[' || input[i+1] === '('){
          calc += part;
          part = 1;
        }
      }
      else part *= 2;
      stack.pop();
    }
  }
  else if(input[i] === ']'){                                          // ]
    if(stack.length === 0 || stack[stack.length-1] !== '['){
      error = true;
      break;
    }
    else {                                                            // [] 가 쌍으로 만남.
      if(i+1 < len){
        part *= 3;
        if(input[i+1] === '[' || input[i+1] === '('){
          calc += part;
          part = 1;
        }
      }
      else part *= 3;
      stack.pop();
    }
  }
}
calc += part;

if(stack.length !== 0) error = true;
if(error) console.log(0);
else console.log(calc);