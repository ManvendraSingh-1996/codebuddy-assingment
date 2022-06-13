// level {1/2/3}

let n = 4;
let value = "";

for(let i = 1; i<=n; i++){
    //loop for spaces
    for(let j = 1 ; j <= n-i; j++){
        value += " ";
    }
    //printing numbers
    for(let k = 1; k<=i;k++){
        value += k;
    }
    //decresing half part
    for(let l = i-1;l>=1; l--){
        value += l;
    }
    value+= "\n";
}
console.log(value);