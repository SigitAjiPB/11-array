console.log('-----------11q-----------');

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}

    console.log(findIndex(['red', 'green', 'yellow', 'red', 'red'], 'red'));
    console.log(findIndex(['green','yellow'], 'red'));

function unique(array) {
  const result = [];
  
  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    
    if (findIndex(result, word) === -1) {
      result.push(word);
    }
  }
  return result;
}
      
console.log(unique(['green', 'yellow', 'red', 'yellow', 'blue']));
console.log(unique(['green', 'yellow', 'red', 'yellow', 'green']));

// function unique(array) {
  //   const result = [];
  
  //   for (let i = 0; i < array.length; i++) {
    //     const word = array[i];
    
    //     if (findIndex(result, word) === -1) {
      //       result.push(word);
      //     }
      //   }
      //   return result;
      // }
      

      

