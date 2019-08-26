
const middle = function(arr) {
  const midIndex = Math.floor(arr.length / 2);
  let middleArray = [];
  for(let i = 0; i <= midIndex; i++) {
    console.log("=>", arr[i]);
    if(arr.length === 1 || arr.length === 2) {
      return middleArray;
    } else if(arr.length % 2 === 0) {
      middleArray.push(arr[midIndex -1], arr[midIndex]);
      return middleArray.slice(0, 2);
    } else {
      middleArray.push(arr[midIndex]);
      return middleArray;
    }
  }
}
// console.log(assertArrayEqual(middle([1, 2, 3]), middle([1, 2, 2, 3, 4])));
module.exports = middle;