function solution(id_list, report, k) {
  let userMap = new Map();
  let mailMap = new Map();
  for(let i=0; i<id_list.length; i++) {
    userMap.set(id_list[i], new Set());
    mailMap.set(id_list[i], 0);
  } // userMap의 각 set에는 나를 신고한 사람들이 저장됨.
  for(let i=0; i<report.length; i++) {
    const [value, key] = report[i].split(" ");
    const set = userMap.get(key);
    const newSet = set.add(value);
    userMap.set(key, newSet);
  }
  for(let i=0; i<id_list.length; i++) {
    let reportList = userMap.get(id_list[i]);
    if(reportList.size >= k) {
      reportList.forEach(user => {
        let num = mailMap.get(user);
        mailMap.set(user, num+1);
      })
    }
  }
  let answer = [];
  mailMap.forEach(num => {
    answer.push(num);
  })
  return answer;
}