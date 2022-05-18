const clausesLength = 3;

/*
* Builds the instance(s) into a friendly way
*/
export function buildInstance(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let info = {
            id: hexToDecimal(arr[i][0]),
            chain: buildChain(arr[i][1]),
            size: hexToDecimal(arr[i][2]),
            created: buildDate(arr[i][3]),
            solution: arr[i][4],
            solved: arr[i][5],
            ended: buildDate(arr[i][6])
        };
        result.push(info);
    }
    return result;
}

/*
* Builds the chain as a string
*/
function buildChain(_oldChain) {
    let result = "";
    let array = Array.from(_oldChain);
    while (array.length > 1) {
        result += "(";
        for (let i = 0; i < clausesLength; i++) {
            if (Math.random() < 0.5)
                result += "x" + array.shift();
            else
                result += "¬" + "x" + array.shift();
            if (i < clausesLength - 1)
                result += " v ";
        }
        result += ")";
        if (array.length > 1)
            result += " ^ ";
    }
    return result;
}

/*
* Converts a hexadecimal number to decimal number
*/
function hexToDecimal(_hexNumber) {
    return parseInt(_hexNumber._hex, 16);
}

/*
* Builds the date as date format
*/
function buildDate(_oldDate) {
    let result, newDate;
    if (hexToDecimal(_oldDate) !== 0) {
        newDate = new Date(parseInt(_oldDate._hex.slice(2), 16) * 1000);
        result = newDate.getFullYear() + "/" + (newDate.getMonth()+1) + "/" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes();
    } else
        result = "Date unavailable";
    return result;
}

/*
* Returns 'true' or 'false' with 50% probability
*/
function getBoolean() {
    if (Math.random() >= 50)
        return true;
    else
        return false;
}

/*
* Builds an array of date as date format
*/
export function buildDateArray(_arrayRandoms) {
    let result = [];
    for (let i = 0; i < _arrayRandoms.length; i++)
        result.push(buildDate(_arrayRandoms[i]));
    return result;
} 