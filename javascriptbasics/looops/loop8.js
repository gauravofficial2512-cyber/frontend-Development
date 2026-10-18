let s = "Abhishek Verma"
let c1 = 0;
for(let i = 0;i<s.length;i++){
    let a = s.charAt(i);
    if(a==='a'|| a==='e' || a=='i' || a==='o' || a==='u'
        || a== 'A' || a=== 'E' || a ==='I' || a==='O' || a==='U'){
            c1++;
        }
}
console.log(c1);