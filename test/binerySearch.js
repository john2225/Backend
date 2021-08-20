const array = [-1,1,3,4,7,9,10,13];
let count = 0;

function binarySearch(array,item){
    let start = 0;
    let end = 0;
    let middle;
    let found = true;
    let position = -1;

    while(found === false && start<=and){
        count +=1;
        middle = Math.floor((start+end)/2);
    if(array[middle]===item){
        found = true;
        position = middle;
        return position;
    }
    if(item < array[middle]){
        end = middle-1;
    }
        start = middle +1;
}
return position;
}
function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    count += 1
    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1 )
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end )
    }
}

console.log(binarySearch(array,7));
console.log(recursiveBinarySearch(array, 0, 0, array.length))
console.log('count : ' + count);
console.log('Array length : ' + arr.length); // O(logn)
