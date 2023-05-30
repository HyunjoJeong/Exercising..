function solution(maps) {
  let x = maps[0].length;
  let y = maps.length;
  let answer = 0;
  let numMap = [];
  let numMap2 = [];
  let start = [];
  let exit = [];
  let lever = [];
  for (let j=0; j<y; j++) {
    let numRow = [];
    for (let i=0; i<x; i++) {
      if(maps[j][i] === 'X') numRow.push(0);
      else {
        numRow.push(1);
        if(maps[j][i] === 'S') start = [j, i];
        else if(maps[j][i] === 'E') exit = [j, i];
        else if(maps[j][i] === 'L') lever = [j, i];
      }
    }
    numMap.push(numRow);
    numMap2.push([...numRow]);
  }
  let nextnodes = [start];
  let leverReached = false;
  while(!leverReached) {
    let [currY, currX] = nextnodes.shift();
    if(currY < y-1 && avail(numMap[currY+1][currX], numMap[currY][currX])) {   // 아래
      nextnodes.push([currY+1, currX]);
      numMap[currY+1][currX] = numMap[currY][currX] + 1;
    }
    if(currX < x-1 && avail(numMap[currY][currX+1], numMap[currY][currX])) {   // 오른
      nextnodes.push([currY, currX+1]);
      numMap[currY][currX+1] = numMap[currY][currX] + 1;
    }
    if(currY > 0 &&  avail(numMap[currY-1][currX], numMap[currY][currX])) {   // 위
      nextnodes.push([currY-1, currX]);
      numMap[currY-1][currX] = numMap[currY][currX] + 1;
    }
    if(currX > 0 && avail(numMap[currY][currX-1], numMap[currY][currX])) {   // 왼
      nextnodes.push([currY, currX-1]);
      numMap[currY][currX-1] = numMap[currY][currX] + 1;
    }
    if(nextnodes.length === 0) return -1;
    if(numMap[lever[0]][lever[1]] !== 1) {
      leverReached = true;
      answer += numMap[lever[0]][lever[1]]-1;
    }
  }
  nextnodes = [lever];
  let finish = false;
  while(!finish) {
    let [currY, currX] = nextnodes.shift();
    if(currY < y-1 && avail(numMap2[currY+1][currX], numMap2[currY][currX])) {   // 아래
      nextnodes.push([currY+1, currX]);
      numMap2[currY+1][currX] = numMap2[currY][currX] + 1;
    }
    if(currX < x-1 && avail(numMap2[currY][currX+1], numMap2[currY][currX])) {   // 오른
      nextnodes.push([currY, currX+1]);
      numMap2[currY][currX+1] = numMap2[currY][currX] + 1;
    }
    if(currY > 0 &&  avail(numMap2[currY-1][currX], numMap2[currY][currX])) {   // 위
      nextnodes.push([currY-1, currX]);
      numMap2[currY-1][currX] = numMap2[currY][currX] + 1;
    }
    if(currX > 0 && avail(numMap2[currY][currX-1], numMap2[currY][currX])) {   // 왼
      nextnodes.push([currY, currX-1]);
      numMap2[currY][currX-1] = numMap2[currY][currX] + 1;
    }
    if(nextnodes.length === 0) return -1;
    if(numMap2[exit[0]][exit[1]] !== 1) {
      finish = true;
      answer += numMap2[exit[0]][exit[1]]-1;
    }
  }
  function avail (next, curr) {
    if(next !== 0 && next === 1 || next > curr+1) return true;
    return false;
  }
  return answer;
}