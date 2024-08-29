// const add = (a,b)=>{ //normal pattern
//     return a+b;
// }
// module.exports = add;

// const add = (a,b)=>{//second PATTERN-----------------------------------------------------
//     return a+b;
// }

// const substract = (a,b)=>{
//         return a-b;
// }
    
// module.exports = {
//     add,//add:add,
//     substract//    substract:substract
// }

// module.exports.add = (a,b)=>{//third PATTERN--------------------------------------------------
//     return a+b;
// }

// module.exports.substract = (a,b)=>{
//         return a-b;
// }

exports.add = (a,b)=>{//fourth PATTERN-exports only-------------------------------------------------
    return a+b;
}

exports.substract = (a,b)=>{
        return a-b;
}