const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const N = Number(input[0]);

for (let i=0; i<N; i++){
  const str = input[i+1].split(' ');
  const nums = str.map(num => Number(num));
  // sort1(nums);
  const sorted = sort2(nums);
  console.log(sorted[2]);
  console.log(sorted);
}

// 그냥 간단하게 selection sort..
function sort1(nums) {
  for(let i=0; i<10-1; i++) {
    for(let j=i+1; j<10; j++){
      if(nums[i] < nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
}

// mergesort를 사용한 방법
function sort2(nums = []) {
  if(Object.keys(nums).length === 0){
    return [];
  }
  const pivot = nums[nums.length-1];
  let smaller_nums = [];
  let bigger_nums = [];
  let same_nums = [];
  for(let i=0; i<nums.length; i++){
    if(nums[i] < pivot){
      smaller_nums = [...smaller_nums, nums[i]];
    }
    else if(nums[i] > pivot){
      bigger_nums = [...bigger_nums, nums[i]];
    }
    else {
      same_nums = [...same_nums, nums[i]];
    }
  }
  smaller_nums = sort2(smaller_nums);
  bigger_nums = sort2(bigger_nums);
  return bigger_nums.concat(same_nums).concat(smaller_nums);
}