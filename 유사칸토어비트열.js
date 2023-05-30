function solution(n, l, r) {
  let answer = 0;
  for(let i=l-1; i<=r-1; i++) {
    if(isOne(i)) answer++;
  }
  return answer;
}

function isOne (num) {
  if(num < 5 && num != 2) return true;
  if(num%5 === 2) return false;
  return isOne(Math.floor(num/5));
}