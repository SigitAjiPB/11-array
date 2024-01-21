const lesson = [
  'hello',
  'world',
  'search',
  'good',
  'search',
];

// ========= 11o =========
for (let i = 0; i < lesson.length; i++) {

  if (lesson[i] === 'search') {
    console.log(i);
    break;
  }
}

// ========= 11p =========
for (let i = 0; i < lesson.length; i++) {
  if (lesson[i] != 'search') {
    console.log('-1');
  }
}

 // ========= 11q =========
function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex(['green', 'red', 'yellow', 'red'], 'red'));
console.log(findIndex(['green','yellow'], 'red'));

// =========== 11r =========

function removeEgg(foods) {
  const result = [];
  const reversedFoods = foods.reverse();
  let foundEgg = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg' && foundEgg < 2) {
      foundEgg ++;
      continue;
    }
      result.push(reversedFoods[i]);
  }
  return result.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));