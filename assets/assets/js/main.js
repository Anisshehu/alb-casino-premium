let jackpot = 12450;

function updateJackpot(){
    jackpot += Math.floor(Math.random()*50);
    document.getElementById("jackpotAmount").innerText = "€" + jackpot.toLocaleString();
}

setInterval(updateJackpot, 3000);

function startGame(){
    alert("🎰 Game loading... (Premium Demo Version)");
}
