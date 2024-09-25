function displayBalance(balance){
    let getBalance = document.getElementById("balance");
    let balanceNum = parseFloat(getBalance.innerText);
    getBalance.innerText = balanceNum - balance;
}