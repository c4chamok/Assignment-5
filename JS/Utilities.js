function displayBalance(balance){
    let getBalance = document.getElementById("balance");
    let balanceNum = parseFloat(getBalance.innerText);
    getBalance.innerText = balanceNum - balance;
}

function displayDonationAmount(section,amount){
    let currentAmmount = document.getElementsByClassName("donated-amount")[section];
    let currentAmmountNum = parseFloat(currentAmmount.innerText)
    currentAmmount.innerText = `${amount+currentAmmountNum} BDT`;
}







