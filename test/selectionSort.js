const arr = [-4,8,52,4,7,-9,25,-5,2,6,14,19];
let  count  = 0;

function selectSort(array){
    for(let i = 0; i < array.length; i++ ){
      let indexMin = i;
      for(let j = i + 1; j < array.length; j++) {
          if(array[i]< array[indexMin]) {
              indexMin = j;
          }
          count += 1;
      }
      let temp = array[i];
      array[i] = array[indexMin];
      array[indexMin] = temp;
    }
    return array;
}
console.log(selectSort(arr));
console.log('count : ' + count);
console.log('Array length : ' + arr.length); // O(n*n)
