let Face = require("./Face");

class Bet {
    constructor(face, betVaue) {
        this.faces = face;
        this.betVaue = betVaue;
        }

set face(face) {
    if(!(face instanceof Face)) {
        throw new Error("Invalid value for property face");
    }
    this._face = face;
}

get face() {
    return this._face;
}

set betValue(betValue) {
    if(isNaN(betValue) || betValue <=0){
        throw new Error("Invalid value for property betValue");
    }

    this._betValue = betValue;

}

get betValue () {
    return this._betValue () {
    }
}

module.exports = Bet; 0
