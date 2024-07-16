const customertNameInput= document.getElementById("searchNameInput");
const customerAmountInput= document.getElementById("searchAmountInput");


let transactions=[];

let customers=[];


async function getCustomerData(){
    let responseCustomers =await fetch('http://localhost:5000/customers');

    let dataCustomers= await responseCustomers.json();

    let responseTransactions =await fetch('http://localhost:5000/transactions');

    let dataTransactions= await responseTransactions.json();
    

     customers =dataCustomers;

     transactions= dataTransactions;
    
    
   

     displayData();
}




function displayData(){
    let cartona=``;
    
    for(var i=0; i<customers.length && i<transactions.length;i++){
        cartona+=`<tr>
        <td>${transactions[i].id}</td>
        <td>${transactions[i].customer_id}</td>
        <td>${customers[i].name}</td>
        <td>${transactions[i].date}</td>
        <td>${transactions[i].amount}</td>
        
    </tr>`
    }

    document.getElementById('tableData').innerHTML=cartona;


    
}



getCustomerData();



function searchName(){

    var term=customertNameInput.value;
    var cartona="";

        for(var i=0 ;i<customers.length && i<transactions.length ; i++){
            if(customers[i].name.toLowerCase().includes(term.toLowerCase())==true){
                cartona+=` <tr>
        <td>${transactions[i].id}</td>
        <td>${transactions[i].customer_id}</td>
        <td>${customers[i].name}</td>
        <td>${transactions[i].date}</td>
        <td>${transactions[i].amount}</td>
        
    </tr>`
            
            }
        }
        document.getElementById('tableData').classList.remove('d-none');

        document.getElementById('tableData').innerHTML=cartona;
    
}
function searchAmount(){

    var term=customerAmountInput.value;
    var cartona="";

        for(var i=0 ;i<customers.length && i<transactions.length ; i++){
            if(transactions[i].amount==term){
                cartona+=` <tr>
        <td>${transactions[i].id}</td>
        <td>${transactions[i].customer_id}</td>
        <td>${customers[i].name}</td>
        <td>${transactions[i].date}</td>
        <td>${transactions[i].amount}</td>
        
    </tr>`
            
            }
        }
        document.getElementById('tableData').classList.remove('d-none');

        document.getElementById('tableData').innerHTML=cartona;
        
    
}
