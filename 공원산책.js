function solution(park, routes) {
  let height = park.length;
  let width = park[0].length;

  let curr_loc = [];
  outerFor : for(let i=0; i<height; i++) {
    for(let j=0; j<width; j++) {
      if(park[i][j] === 'S') {
        curr_loc = [i, j];
        break outerFor;
      }
    }
  }

  let routeNum = routes.length;
  for(let i=0; i<routeNum; i++) {
    let direction = routes[i][0];
    let movements = Number(routes[i].substring(2));
    const [a, b] = curr_loc;
    let isObstacle = false;
    switch(direction) {
      case 'E':
        if(curr_loc[1] + movements >= width) break;
        for(let i=1; i<=movements; i++) {
          if(park[a][b+i] === 'X') {
            isObstacle = true;
            break;
          }
        }
        if(isObstacle) break;
        curr_loc = [a, b+movements];
        break;
      case 'W':
        if(curr_loc[1] - movements < 0) break;
        for(let i=1; i<=movements; i++) {
          if(park[a][b-i] === 'X') {
            isObstacle = true;
            break;
          }
        }
        if(isObstacle) break;
        curr_loc = [a, b-movements];
        break;
      case 'S':
        if(curr_loc[0] + movements >= height) break;
        for(let i=1; i<=movements; i++) {
          if(park[a+i][b] === 'X') {
            isObstacle = true;
            break;
          }
        }
        if(isObstacle) break;
        curr_loc = [a+movements, b];
        break;
      case 'N':
        if(curr_loc[0] - movements < 0) break;
        for(let i=1; i<=movements; i++) {
          if(park[a-i][b] === 'X') {
            isObstacle = true;
            break;
          }
        }
        if(isObstacle) break;
        curr_loc = [a-movements, b];
        break;
    }
  }

  return curr_loc;
}