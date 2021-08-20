const array = [-4,2,7,25,28,45,50];

function linearSearch(array,item){
    for(let i = 0; i < array.length; i++){
        count +=1;
        if(array[i] === item){
            return i;
        } else return null;
    }
}
console.log(array,25);
console.log('count : ' + count);
console.log('Array length : ' + arr.length); // O(n)
