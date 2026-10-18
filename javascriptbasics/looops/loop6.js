let a = 0;
let b = 1;
let s = "";
for(let i=1;i<=10;i++){
    s = s + a + " ";
    let c=a+b;
    a=b;
    b=c;
}
console.log(s);