function solution(today, terms, privacies) {
  let Today = Number(today.replace('.', '').replace('.', ''));
  let termsMap = new Map();
  for(let i=0; i<terms.length; i++) {
    let key = terms[i][0];
    let value = Number(terms[i].substring(2));
    termsMap.set(key, value);
  }
  let overDated = [];
  for(let i=0; i<privacies.length; i++){
    let startDate = Number(privacies[i].substring(0, 10).replace('.', '').replace('.', ''));
    let termType = privacies[i][11];
    let duration = termsMap.get(termType);
    let dur_year = Math.floor(duration/12);
    let dur_month = duration%12;
    let expireDate = startDate + dur_year*10000 + dur_month*100;
    if(Math.floor(expireDate%10000)>1300) expireDate = expireDate + 10000 - 1200;
    if(expireDate <= Today) {
      overDated.push(i+1);
    }
  }
  return overDated;
}