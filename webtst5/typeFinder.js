/**
 * Created by amir on 4/5/18.
 */

let input = null;

function findType(inp) {
    if(inp === null)
        return "Null";
    if(Array.isArray(inp))
        return "Array";
    return typeof inp;
}
console.log(findType(input));