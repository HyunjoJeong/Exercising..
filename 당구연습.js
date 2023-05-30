function solution(m, n, startX, startY, balls) {
  let width = m;
  let height = n;
  let shortest = 0;
  let result = [];
  for(let i=0; i<balls.length; i++) {
    let x1 = -balls[i][0];
    let x2 = 2*width - balls[i][0];
    let y1 = -balls[i][1];
    let y2 = 2*height - balls[i][1];
    let length1 = (startX-x1)**2 + (startY-balls[i][1])**2;  // 왼쪽벽에 바운스
    let length2 = (startX-x2)**2 + (startY-balls[i][1])**2;  // 오른쪽벽에 바운스
    let length3 = (startX-balls[i][0])**2 + (startY-y1)**2;  // 아래쪽벽에 바운스
    let length4 = (startX-balls[i][0])**2 + (startY-y2)**2; // 위쪽벽에 바운스
    if(startX === balls[i][0]) { // 수직인 case
      if(startY > balls[i][1]) {
        shortest = Math.min(length1, length2, length4);
      } else {
        shortest = Math.min(length1, length2, length3);
      }
    } else if(startY === balls[i][1]) {  // 수평인 case
      if(startX > balls[i][0]) {
        shortest = Math.min(length2, length3, length4);
      } else {
        shortest = Math.min(length1, length3, length4);
      }
    } else {
      shortest = Math.min(length1, length2, length3, length4);
    }
    result.push(shortest);
  }
  return result;
}