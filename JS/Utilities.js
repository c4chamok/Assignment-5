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


function showModal(){
    const modalContainer = document.getElementById("modal");
    modalContainer.innerHTML = `
        <div class="p-4 text-center w-[90%] md:w-[45%] h-fit sticky top-[23%] flex flex-col gap-3 items-center bg-white rounded-lg">
            <h1 class="text-3xl">Congrates!</h1>
            <img class="size-16" src="./assets/coin.png" alt="">
            <p>You Have donated for humankind</p>
            <h2 class="text-2xl">Successfully</h2>
            <button id="closebtn" class="px-3 py-2 bg-[#f2f2f2] hover:bg-[#d1d1d1] rounded-md">Close Confirmation</button>
        </div>`;
    
    modalContainer.classList.replace("hidden","flex");
    document.getElementById("closebtn").addEventListener("click",function(){
        modalContainer.classList.replace("flex","hidden");
    });
}




