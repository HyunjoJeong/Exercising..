function solution(dots) {
  let ab = ((dots[1][1]-dots[0][1])/(dots[1][0]-dots[0][0]));
  let cd = ((dots[3][1]-dots[2][1])/(dots[3][0]-dots[2][0]));
  let ac = ((dots[2][1]-dots[0][1])/(dots[2][0]-dots[0][0]));
  let bd = ((dots[3][1]-dots[1][1])/(dots[3][0]-dots[1][0]));
  let ad = ((dots[3][1]-dots[0][1])/(dots[3][0]-dots[0][0]));
  let bc = ((dots[2][1]-dots[1][1])/(dots[2][0]-dots[1][0]));
  
  let answer = 0;
  if(ab === cd) answer = 1;
  else if (ac === bd) answer = 1;
  else if (ad === bc) answer = 1;

  return answer;
}