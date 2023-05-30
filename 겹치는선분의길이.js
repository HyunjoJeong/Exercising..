function solution(lines) {
  let start1 = lines[0][0];
  let start2 = lines[1][0];
  let start3 = lines[2][0];
  let end1 = lines[0][1];
  let end2 = lines[1][1];
  let end3 = lines[2][1];
  let start = Math.min(start1, Math.min(start2, start3));
  let end = Math.max(end1, Math.max(end2, end3));

  let answer = 0;
  for(let i=start; i<=end; i++) {
    let between12 = between(start1, end1, i) && between(start2, end2, i)
    let between23 = between(start2, end2, i) && between(start3, end3, i)
    let between13 = between(start1, end1, i) && between(start3, end3, i)
    let between123 = between12 && between23;

    if (between123) {
      answer++;
      continue;
    }
    else if(between12) {
      answer++;
      continue;
    }
    else if(between23) {
      answer++;
      continue;
    }
    else if(between13) {
      answer++;
      continue;
    }    
  }
  return answer;
}

function between (a, b, i) {
  if(a <= i && i < b) return true;
  else return false;
}