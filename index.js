function iterativeLog(array, index, element) {
  array.forEach((index, element) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  let array = [1, 2, 3];

  array.forEach(callback);

  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
