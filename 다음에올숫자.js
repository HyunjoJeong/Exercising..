function solution(common) {
  let last = common.length - 1;
  let answer = 0;
  if(common[last]-common[last-1] === common[last-1]-common[last-2]) answer = 2*common[last] - common[last-1];
  else answer = common[last]*common[last]/common[last-1];
  return answer;
}