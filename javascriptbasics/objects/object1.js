let data = [
    {name : "Gaurav Prajapati",age:20,course:"Btech"},
    {name : "Krishna Gupta",age:21,course:"Btech"},
    {name : "Abhishek Verma",age:19,course:"BCA"},
    {name : "Aryansh",age:23,course:"Aiml"},
    {name : "Prashant",age:24,course:"BBA"}
]
let person = "";
let x = data[0].age;
for(let i=0;i<data.length;i++){
    if(data[i].age>x){
        person = data[i].name;
        x = data[i].age

    }
}
console.log("oldest person = ",person);