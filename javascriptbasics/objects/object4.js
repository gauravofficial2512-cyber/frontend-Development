let arr = [
    {
        name : "Gaurav",
        age : 21,
        address:{
            state : "Haryana",
            city : "Faridabad",
            picode : 121004
        },
        sec : "AB",
        year: "3rd",
        sem : "5th"
    
    },
    {
        name : "Krishna Agarwal",
        age : 22,
        address : {
            state : "Uttar Pradesh",
            city : "Agra",
            pincode : 282406
        },
        sec : "AA",
        year : "3rd",
        sem : "6th"
    },
    {
        name : "Abhishek Verma",
        age : 23,
        address :{
            state : "Haryana",
            city : "Palwal",
            pincode : 121005
        },
        sec : "AC",
        year : "2nd",
        sem : "3rd"

    }
]
for(let i = 0;i<arr.length;i++){
    console.log(arr[i].name + "  =>  " + arr[i].address.city);
}
