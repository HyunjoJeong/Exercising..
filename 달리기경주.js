function solution(players, callings) {
  let map1 = new Map();
  let map2 = new Map();

  players.forEach((player, location) => {
    map1.set(player, location);
    map2.set(location, player);
  });

  callings.forEach((player) => {
    let currLoc = map1.get(player);
    let nextLoc = currLoc - 1;
    let forwardPlayer = map2.get(nextLoc);
    map1.set(player, nextLoc);
    map1.set(forwardPlayer, currLoc);
    map2.set(nextLoc, player);
    map2.set(currLoc, forwardPlayer);
  });

  let answer = [];
  for(let i=0; i<players.length; i++) {
    answer.push(map2.get(i));
  }
  return answer;
}