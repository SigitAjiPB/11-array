const lesson = [
  'hello',
  'world',
  'search',
  'good',
  'search',
];

// ========= 11o =========
console.log('--------------11o------------');
for (let i = 0; i < lesson.length; i++) {

  if (lesson[i] === 'search') {
    console.log(i);
    break;
  }
}

// ========= 11p =========
console.log('-------------11p---------')
for (let i = 0; i < lesson.length; i++) {
  if (lesson[i] != 'search') {
    console.log('-1');
  }
}

 // ========= 11q =========
 console.log('-----------11q-----------');
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


// =============== 11w =============
console.log('--------------11w------------');

function tampilkanTidakTerduplikasi(arr) {
  var hasil = [];
  var duplikat = [];

  for (var i = 0; i < arr.length; i++) {
      var elemen = arr[i];

      if (duplikat.indexOf(elemen) === -1) {
          if (arr.indexOf(elemen, i + 1) === -1) {
              hasil.push(elemen);
          } else {
              duplikat.push(elemen);
          }
      }
  }

  return hasil;
}

// Contoh penggunaan
var arrayInput = ['green', 'red', 'yellow', 'red'];
var hasilOutput = tampilkanTidakTerduplikasi(arrayInput);
console.log(hasilOutput);





// =========== 11r =========

console.log('--------------11r------------');
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
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

console.log(removeEgg(foods));
console.log(foods);


// ============ 11u =================
console.log('--------------11u------------');
const weapons = ['katars', 'cannon', 'katars', 'sword', 'orb', 'katars']

function removeKatars () {
  const result = [];
  const reversedWeapons = weapons.reverse();
  let findKatars = 0;

  for(let i = 0; i < weapons.length; i++) {
    if (weapons[i] === 'katars' && findKatars < 2) {
      findKatars++
      continue;
    }
    result.push(reversedWeapons[i]);
  }
  return result.reverse();
}

console.log(removeKatars(weapons));
console.log(weapons);

// =============== 11v =================

console.log('--------------11v------------');
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function fizzBuzz () {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 5 === 0 && nums[i] % 3 === 0) {
      nums[i] = 'FizzBuzz'
    } else if (nums[i] % 5 === 0) {
      nums[i] = 'Buzz';
    } else if (nums[i] % 3 === 0) {
      nums[i] = 'Buzz'
    }
    result.push(nums[i]);
  }
  return result;
}

console.log(fizzBuzz());


