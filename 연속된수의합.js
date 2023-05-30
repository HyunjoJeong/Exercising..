function solution(num, total) {
  let answer = [];
  if(num%2==1) {
    let med = total/num;
    let offset = Math.floor(num/2);
    for (let i=0; i<num; i++){
      answer.push(med-offset+i);
    }
  }
  else {
    let start = parseInt(total/num + 0.5 - num/2);
    for (let i=0; i<num; i++){
      answer.push(start+i);
    }
  }
  return answer;
}