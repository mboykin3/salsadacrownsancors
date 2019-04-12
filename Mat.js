let Face = require("./Face");

class = Mat {
    constructor(Matfaces);
    this.faces = Matfaces    //check if it is an array
    
}
set faces(value) {      //validate if it is a face/ or value
    if(Array,isArray(value)) {
        throw new Error();

    }
    let isValid = faces.map((f) => f instanceof Face) ? 0 : 1);
    let errors = isValid.filter((f) => f )
}
