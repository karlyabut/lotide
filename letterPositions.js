const letterPositions = function(str) {
  const results = {};
  for(let i = 0; i < str.length; i++) {
    if(str !== " ") {
      if(!results[str[i]]) {
        results[str[i]] = [i];
      } else {
        results[str[i]].push(i);
      }
    }
  } 
  return results;
}
console.log("======>", letterPositions("Lighthouse in the house"));