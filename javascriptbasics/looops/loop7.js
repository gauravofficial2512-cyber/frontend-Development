let s = prompt("Enter String");
let s1 = "";
for(let i=s.length-1;i>=0;i--){
    s1 = s1 + s.charAt(i);
}
console.log(s1);