let arr = [
    {name : "krishna",marks : 77},
    {name : "Abhishek",marks:78},
    {name : "Gaurav",marks:57}
]
let arr1 = []
for(let i=0;i<arr.length;i++){
    if(arr[i].marks>75){
        arr1.push(arr[i].name);
    }
}
console.log("Students with marks greater than 75 = ",arr1);