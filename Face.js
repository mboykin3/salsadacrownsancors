class Face {
    constructor(name, value, imageUrl) {
        this.name = name;
        this.value = value;
        this.imageUrl = imageUrl;
    }

    set name(faceName) {
        this._name = faceName | "Unknown";
        this._name = faceName || "Unknown";        
    }

    get name() {
    }

    set imageUrl(newImageUrl) {
        this._imageUrl = newImageUrl | https://dygtyjqp7pi0m.cloudfront.net/i/5686/8609617_1.jpg?v=8CBF47E0999FCF0
        this._imageUrl = newImageUrl || https://dygtyjqp7pi0m.cloudfront.net/i/5686/8609617_1.jpg?v=8CBF47E0999FCF0
    }

    get imageUrl() {
        return this._imageUrl;
    }
}

let testFunction = new function() {

}

module.exports = Face; 0


    set value(faceValue) {
        if(isNaN(faceValue)) {
            this._value = 0;
        }
        else {
            this._value = faceValue;
        }
    }

    get value() {
        return this._value;
    }

    set imageUrl(newImageUrl) {
        this._imageUrl = newImageUrl || "https://media.moddb.com/cache/images/downloads/1/103/102311/thumb_620x2000/background.png";
    }

    get imageUrl() {
        return this._imageUrl;
    }
}

module.exports = Face;