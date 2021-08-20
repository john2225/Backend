const arr = [0,5,-4,8,52,4,7,-9,25,2,6,14,19];
let count = 0;


function bubbleSort(array){
    for(let i = 0; i < array.length; i++ ){
        for(let j = 0; j < array.length; j++){
            if(array[j+1] < array[j]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            count ++;
        }
    }
    return array;
}

console.log(bubbleSort(arr));
console.log('count : ' + count);
console.log('Array length : ' + arr.length); // O(n*n)