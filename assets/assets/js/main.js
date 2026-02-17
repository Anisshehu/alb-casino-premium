let balance = 1000;
let symbols = ["🍒","💎","🔥","⭐","🎰"];

document.getElementById("spinBtn").addEventListener("click", function(){

    if(balance < 50){
        showModal("❌ Not enough balance!");
        return;
    }

    balance -= 50;
    updateBalance();

    let slot = document.getElementById("slot");
    slot.innerHTML = "⏳";

    setTimeout(function(){

        let random = Math.floor(Math.random() * symbols.length);
        let result = symbols[random];
        slot.innerHTML = result;

        if(result === "💎"){
            balance += 300;
            showModal("💎 JACKPOT! +€300");
        } else if(result === "🔥"){
            balance += 150;
            showModal("🔥 Big Win! +€150");
        } else if(result === "⭐"){
            balance += 100;
            showModal("⭐ Win! +€100");
        } else {
            showModal("😢 Try Again!");
        }

        updateBalance();

    }, 1500);
});

function updateBalance(){
    document.getElementById("balance").innerHTML = "Balance: €" + balance;
}

function showModal(text){
    document.getElementById("resultText").innerHTML = text;
    document.getElementById("modal").style.display = "flex";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}
