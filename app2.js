var Die = require("./Die");
var Face = require('./Face');
var Bet = require("./Bet");
var Mat = require("./Mat");

var die = new Die();
try {

    var myFace = new Face('Crown, 10, https://image.shutterstock.com/image-vector/crown-icon-set-vector-450w-1315910423.jpg ');
    var myBet = new Bet(myFace, -5);
    var faces = [];

    console.log(die.ActiveFace);
    faces.push(myFace);

    var myMat = new Mat(faces);

    myMat.faces
    console.log('Im Beting ${myBet.betValue}');
}
catch(err) {
    console.log(err.message);
    console.log(err.stack);
}

die.rollDie();

console.log(die.ActiveFace); 0
