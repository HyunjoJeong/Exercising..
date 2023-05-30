function solution(expression) {
  separate(expression);
  let biggest = 0;
  for (let i=0; i<6; i++){
    priority(i);
    const result = calculation();
    if(result > biggest) biggest = result;
  }
  return biggest;
}

let nums = [];
let operators = [];
function separate (expression="") {
  let num = 0;
  for (let i=0; i<expression.length; i++) {
    if(expression[i] === '*' || expression[i] === '+' || expression[i] === '-'){
      operators = [...operators, expression[i]];
      nums = [...nums, num];
      num = 0;
    }
    else {
      num = num*10 + Number(expression[i]);
      if(i === expression.length-1) nums = [...nums, num];
    }
  }
}

// 각 case는 [+, -, *] 의 우선순위. 클수록 우선.
const priority_cases = [
  [0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]
];

operator_priority = [];
function priority (priority_case) {
  operators.forEach((op) => {
    switch(op){
      case '+': 
        operator_priority = [...operator_priority, priority_cases[priority_case][0]];
        break;
      case '-': 
        operator_priority = [...operator_priority, priority_cases[priority_case][1]];
        break;
      case '*': 
        operator_priority = [...operator_priority, priority_cases[priority_case][2]];
        break;
    }
  })
}

function calculation () {
  let c_nums = [...nums];
  let c_operators = [...operators];
  let result = 0;

  for(let i=0; i<c_operators.length; i++) {
    if(operator_priority[i] === 2) {
      result = eval(`${c_nums[i]}${c_operators[i]}${c_nums[i+1]}`);
      c_nums[i] = result;
      c_nums.splice(i+1, 1);
      c_operators.splice(i, 1);
      operator_priority.splice(i, 1);
      i--;
    }
  }
  for(let i=0; i<c_operators.length; i++) {
    if(operator_priority[i] === 1) {
      result = eval(`${c_nums[i]}${c_operators[i]}${c_nums[i+1]}`);
      c_nums[i] = result;
      c_nums.splice(i+1, 1);
      c_operators.splice(i, 1);
      operator_priority.splice(i, 1);
      i--;
    }
  }
  for(let i=0; i<c_operators.length; i++) {
    if(operator_priority[i] === 0) {
      result = eval(`${c_nums[i]}${c_operators[i]}${c_nums[i+1]}`);
      c_nums[i] = result;
      c_nums.splice(i+1, 1);
      c_operators.splice(i, 1);
      operator_priority.splice(i, 1);
      i--;
    }
  }
  return Math.abs(c_nums[0]);
}