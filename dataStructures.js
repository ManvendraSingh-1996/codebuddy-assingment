// level {1/2/3}

let arr = [1,2,3];
let newArr = arr.map(x=>{
    return x + 1;
})

console.log(newArr);

//2- subarray 
function subArrays(){
    let array2 = [1,2,3];
    let n = array2.length;
    let subArray = n * (n + 1)/2;
    return subArray;
}
console.log(subArrays());


//ques3

let obj = {name: 'Elie',
         rank: 'Pro'}
let string2 = new String(obj);
console.log(string2);


let string = JSON.stringify(obj,null);
console.log(string);
