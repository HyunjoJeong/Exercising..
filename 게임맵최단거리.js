function solution(maps) {
  let x = maps[0].length;
  let y = maps.length;
  let nextnodes = [[0,0]];
  let finish = false;
  while(!finish) {
    let [currY, currX] = nextnodes.shift();
    if(currY < y-1 && avail(maps[currY+1][currX], maps[currY][currX])) {   // 아래
      nextnodes.push([currY+1, currX]);
      maps[currY+1][currX] = maps[currY][currX] + 1;
    }
    if(currX < x-1 && avail(maps[currY][currX+1], maps[currY][currX])) {   // 오른
      nextnodes.push([currY, currX+1]);
      maps[currY][currX+1] = maps[currY][currX] + 1;
    }
    if(currY > 0 &&  avail(maps[currY-1][currX], maps[currY][currX])) {   // 위
      nextnodes.push([currY-1, currX]);
      maps[currY-1][currX] = maps[currY][currX] + 1;
    }
    if(currX > 0 && avail(maps[currY][currX-1], maps[currY][currX])) {   // 왼
      nextnodes.push([currY, currX-1]);
      maps[currY][currX-1] = maps[currY][currX] + 1;
    }
    if(nextnodes.length === 0) break;
    if(maps[y-1][x-1] !== 1) finish = true;
  }
  function avail (next, curr) {
    if(next !== 0 && next === 1 || next > curr+1) return true;
    return false;
  }
  return finish ? maps[y-1][x-1] : -1;
}