const arr = ["abc", "def", "ghi"];

arr.pop();

for(let e of arr){
    console.log(e);
}

arr.push(6);
for(let e of arr){
    console.log(e);
}


let text = arr.join(" ");
console.log(text);

let str = arr.toString();
console.log(str);