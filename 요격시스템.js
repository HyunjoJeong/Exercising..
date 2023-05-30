function solution(input) {
  let targets = quicksort(input);
  console.log(targets);
  let nums = 0;
  let last = 0;
  for(let i=0; i<targets.length; i++) {
    if(targets[i][0] >= last) {
      nums++;
      last = targets[i][1];
    }
  }
  return nums;
}

function quicksort(elements) {
  if(elements.length <= 1) return elements;
  let pivot = elements[elements.length-1][1];
  let left = [];
  let right = [];
  let same = [];
  for(let i=0; i<elements.length; i++) {
    if(elements[i][1] < pivot) { left.push(elements[i]); }
    else if(elements[i][1] > pivot) { right.push(elements[i]); }
    else same.push(elements[i]);
  }
  left = quicksort(left);
  right = quicksort(right);
  return left.concat(same).concat(right);
}