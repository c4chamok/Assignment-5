const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");
const historyBtn = document.getElementById("history-btn");
const donationTabBtn = document.getElementById("donationtab-btn");



document.getElementById("swap-btn").addEventListener("click",function(event){

    if(event.target.innerText === "History"){
        historyTab.classList.remove("hidden");
        donationTab.classList.add("hidden");
        historyBtn.classList.add("bg-green-300");
        donationTabBtn.classList.remove("bg-green-300");
        donationTabBtn.classList.add("border-[1px]");
        historyBtn.classList.remove("border-[1px]");
    }
    else{
        historyTab.classList.add("hidden");
        donationTab.classList.remove("hidden");
        historyBtn.classList.remove("bg-green-300");
        donationTabBtn.classList.add("bg-green-300");
        donationTabBtn.classList.remove("border-[1px]");
        historyBtn.classList.add("border-[1px]");
    }
    
})








