const arr = [13,2,4,-9,25,47,6,46,22];
let count = 0; 

function merge (left, rigth){
    let arr = [];
    while(left.length && rigth.length){
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
    const middle = array.length / 2
    
    if(array.length <= 1 ){
      return array 
    }
    
    const left = array.splice(0, middle)
    return merge(mergeSort(left),mergeSort(array))
  }

  console.log(mergeSort(arr));
  console.log(arr.length); // O(logN)