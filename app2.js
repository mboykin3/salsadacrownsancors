var Face = require('./Face');
var Bet = require("./Bet");
var Mat = require("./Mat");

try{

var myFace = new Face('Crown, 10, https://image.shutterstock.com/image-vector/crown-icon-set-vector-450w-1315910423.jpg ');
var myBet = new Bet(myFace, -5);

console.log('Im Beting ${myBet.betValue}');
}

