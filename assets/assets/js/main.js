let balance = 1000;
let jackpot = 12494;
let symbols = ["🍒","💎","🔥","⭐","🎰"];

function updateBalance(){
    document.getElementById("balance").innerHTML = "Balance: €" + balance;
}

function updateJackpot(){
    document.getElementById("jackpot").innerHTML = jackpot;
}

setInterval(function(){
    jackpot += Math.floor(Math.random() * 10);
    updateJackpot();
}, 2000);

document.getElementById("spinBtn").addEventListener("click", function(){

    if(balance < 50){
        showModal("❌ Not enough balance!");
        return;
    }

    balance -= 50;
    updateBalance();

    let slot = document.getElementById("slot");
    slot.innerHTML = "⏳";

    let spinInterval = setInterval(function(){
        let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        slot.innerHTML = randomSymbol;
    }, 100);

    setTimeout(function(){
        clearInterval(spinInterval);

        let random = Math.floor(Math.random() * symbols.length);
        let result = symbols[random];
        slot.innerHTML = result;

        if(result === "💎"){
            balance += 300;
            jackpot -= 300;
            winEffect();
            showModal("💎 JACKPOT! +€300");
        } 
        else if(result === "🔥"){
            balance += 150;
            winEffect();
            showModal("🔥 Big Win! +€150");
        } 
        else if(result === "⭐"){
            balance += 100;
            winEffect();
            showModal("⭐ Win! +€100");
        } 
        else {
            showModal("😢 Try Again!");
        }

        updateBalance();
        updateJackpot();

    }, 2000);
});

function winEffect(){
    document.body.classList.add("flash");
    setTimeout(function(){
        document.body.classList.remove("flash");
    }, 1000);
}

function showModal(text){
    document.getElementById("resultText").innerHTML = text;
    document.getElementById("modal").style.display = "flex";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

function deposit(){
    balance += 500;
    updateBalance();
    showModal("💳 Deposit Successful! +€500");
}
