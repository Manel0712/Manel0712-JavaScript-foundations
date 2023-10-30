/* 
    1. Define function 'getTypeOf', which receives a value as paramenter and returns the type of this value
        Use typeof to ckech the types for each of the main 5 primitive types (string, number, boolean, null, undefined)
    2. Log the result of any function call.
*/
function getTypeOf(value) {
    return typeof value;
}

console.log("Manel", getTypeOf("Manel")); //string

console.log(18, getTypeOf(18)); //number

console.log(true, getTypeOf(true)); //boolean

console.log(null, getTypeOf(null)); //nullValue

console.log(undefined, getTypeOf(undefined)); //undefinedValue
