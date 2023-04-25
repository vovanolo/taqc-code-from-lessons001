

exports.multiplication = function(...elements){
    let result = elements.reduce((multiplication, element) => {
    return multiplication *= element;
},1)
    return result;
}

// exports.default = multiplication();