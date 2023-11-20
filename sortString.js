function sortOrder(sentence) {
  const arr = sentence.split(" ");
  const returnedArr = [];
  arr.forEach((value, i) => {
    let itemI = arr.findIndex((item) => item.includes(i + 1));
    returnedArr[i] = arr[itemI];
  });
  return returnedArr.join(" ");
}
console.log(sortOrder("is2 Thi1s T4est 3a"));
