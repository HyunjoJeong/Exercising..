function solution(wallpaper) {
  let height = wallpaper.length;
  let width = wallpaper[0].length;

  let x_indices = [];
  let y_indices = [];

  for(let i=0; i<height; i++) {
    for(let j=0; j<width; j++) {
      if(wallpaper[i][j] === '#') {
        x_indices.push(i);
        y_indices.push(j);
      }
    }
  }

  sort(x_indices);
  sort(y_indices);

  let max_x = x_indices[0];
  let min_x = x_indices[x_indices.length-1];
  let max_y = y_indices[0];
  let min_y = y_indices[y_indices.length-1];

  let answer = [min_x, min_y, max_x+1, max_y+1];
  return answer;
}

function sort(args) {
  let length = args.length;
  for(let i=0; i<length-1; i++) {
    for (let j=i+1; j<length; j++) {
      if(args[i] < args[j]) {
        [args[j], args[i]] = [args[i], args[j]];
      }
    }
  }
}