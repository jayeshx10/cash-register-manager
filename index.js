const bill_amount = document.querySelector("#bill-amount");
const next_btn = document.querySelector("#next");

const cash_given_div = document.querySelector(".cash-given-div");
const cash_given =  document.querySelector("#cash-given");
const check_btn = document.querySelector("#check");

const changeTable = document.querySelector("#change-table");

const notes_to_be_returned = document.querySelectorAll(".notes-to-be-returned");
const display_msg = document.querySelector("#display-msg");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 1];

// make cash-given and changeTable dissapear
cash_given_div.style.display = "none";
changeTable.style.display = "none";

function showMessage(msg){
    display_msg.style.display = "block";
    display_msg.innerHTML = msg;
}

function calculateChange(toBeReturnedMoney){
    for(let i=0; i<availableNotes.length; i++){
        const noOfNotes = Math.trunc(toBeReturnedMoney/availableNotes[i]);
        toBeReturnedMoney = toBeReturnedMoney % availableNotes[i];
        
        notes_to_be_returned[i].innerHTML = noOfNotes;
    }
}

function nextHandler(){
    if(bill_amount.value > 0){
        display_msg.style.display = "none";
        cash_given_div.style.display = "flex";
        changeTable.style.display = "block";
    }
    else{
        changeTable.style.display = "none";
        showMessage("INVALID BILL AMOUNT");
    }
}

function checkHandler(){
    if(bill_amount.value > 0){
        if(Number(cash_given.value) >= Number(bill_amount.value)){
            display_msg.style.display = "none";
            var toBeReturnedMoney = cash_given.value - bill_amount.value;
            calculateChange(toBeReturnedMoney);
        }
        else{
            changeTable.style.display = "none";
            showMessage("INSUFFICIENT CASH RECEIVED");
        }
    }
    else{
        changeTable.style.display = "none";
        showMessage("INVALID BILL AMOUNT");
    }
}

check_btn.addEventListener('click', checkHandler);
next_btn.addEventListener('click', nextHandler);


