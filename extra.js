var textSpace = document.getElementById("moneySpace");
var money_to_get = random(100, 1000000);
textSpace.innerHTML = "<h1>Congratulations!</h1> <br> $" + money_to_get + " USD were added to your bank account.";
function random(min, max) {
    var result = Math.round(Math.floor(Math.random() * (max - min)+min));
    return result;
}