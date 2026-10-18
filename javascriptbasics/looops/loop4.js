let n = Number(prompt("Enter Number"));
let c = 0;
for(let i=1;i*i<=n;i++){
    if(n%i===0){
        c++;
        if(n/i != i){
            c++;
        }
    }
}
if(c===2){
    console.log("Prime");
}else{
    console.log("Not Prime");
}