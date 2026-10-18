let bankaccount = [
    {
        Account_no : 12345,
        balance : 45000,
        Account_Holder : "Krishna Agarwal",
        Account_Holder_age : 22

    },
    {
        Account_no : 23456,
        balance : 34560,
        Account_Holder:"Gaurav Prajapati",
        Account_Holder_age:21
    },
    {
       Account_no : 45678,
       balance : 45674,
       Account_Holder : "Abhishek Verma" ,
       Account_Holder_age:24
    }
]

let num = Number(prompt("Enter Account Number "));




while(true){
    let choice = Number(prompt("Enter Choice 1 for deposit and 2 for withdraw"))

    let depo = 0;

    let withdraw = 0;

    while(true){
        if(choice===1){
            depo = Number(prompt("Enter Amount for deposit"));
            break;
        }else if(choice==2){
            withdraw = Number(prompt("Enter Amount to withdraw"));
            break;
        }else{
            choice = Number(prompt("Wrong Choice try again"));
        }
    }

    let found = false;
    let c2 = "";
    let to = "no"

    for(let i = 0;i<bankaccount.length;i++){
        
        if(num===bankaccount[i].Account_no){
            found = true;
            if(choice===1){
                bankaccount[i].balance = bankaccount[i].balance + depo;
            }else if(choice===2){
                if(withdraw>bankaccount[i].balance)
                {
                    c2 = (prompt("Balance is lower than withdrawl amount choose a for balance check alogwith another transaction and b for another transaction and c for end trasction"))
                    if(c2==="a")
                    {
                        console.log("Available Balance = ",bankaccount[i].balance);
                        withdraw = Number(prompt("Enter Amount to withdraw"));

                    }else if(c2==="b")
                    {
                        withdraw = Number(prompt("Enter Amount to withdraw"));
                    }else if(c2==="c")
                    {
                        to = "yes";
                        break;
                    }
                }
                bankaccount[i].balance = bankaccount[i].balance - withdraw;
            }
        }
        

    }
    if(to==="yes") break;
    if(found==true){
        break;
    }
    
    else{
        num = Number(prompt("Wrong Account Number Give correct one"));
    }

}
console.log("final Status : ",bankaccount);