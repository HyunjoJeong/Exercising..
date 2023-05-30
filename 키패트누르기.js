function solution(numbers, hand) {
  // numbers = 배열 / hand = string (left, right)
  let answer = '';
  let left_loc = 10;
  let right_loc = 12;

  numbers.forEach((number) =>{
    if(number === 1 || number === 4 || number === 7) leftMove(number);
    else if(number === 3 || number === 6 || number === 9) rightMove(number);
    else {
      let tempNum = number;
      if(number === 0) tempNum = 11;
      let left_diff = Math.abs(tempNum - left_loc);
      let right_diff = Math.abs(tempNum - right_loc);

      let l_diff = diffCal(left_diff);
      let r_diff = diffCal(right_diff);

      if(l_diff < r_diff) leftMove(tempNum);
      else if(r_diff < l_diff) rightMove(tempNum);
      else if (hand === 'left') leftMove(tempNum);
      else rightMove(tempNum);
    }
  });

  function leftMove(number) {
    answer = answer.concat("L");
    left_loc = number;
  }
  function rightMove(number) {
    answer = answer.concat("R");
    right_loc = number;
  }
  
  return answer;
}

function diffCal (diff) {
  if(diff === 0) return 0;
  else if(diff === 1 || diff === 3) return 1;
  else if(diff === 2 || diff === 4 || diff === 6) return 2;
  else if(diff === 5 || diff === 7 || diff === 9) return 3;
  else return 4;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));