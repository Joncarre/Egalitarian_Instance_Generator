
/*
* Builds the instance(s) into a friendly way
*/
export function buildInstance(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let info = {
            id: hexToDecimal(arr[i][0]),
            chain: buildChain(arr[i][1], arr[i][2]),
            agents: agentsInfo(arr[i][2]),
            resources: resourcesInfo(arr[i][2]),
            created: buildDate(arr[i][3]),
            solution: arr[i][4],
            solved: arr[i][5],
            ended: buildDate(arr[i][6]),
            type: typeProblem(hexToDecimal(arr[i][0])),
            mode: mode(arr[i][2])
        };
        result.push(info);
    }
    return result;
}

/*
* Builds the chain as a string
*/
function buildChain(_oldChain, setup) {
    var agents = hexToDecimal(setup[0]);
    var resources = hexToDecimal(setup[1]);
    var mode = hexToDecimal(setup[2]);
    var newChain = _oldChain.substring(0, _oldChain.length-1); // We remove the last space
    var arrayChain = newChain.split(" ");
    var result = [];
    result =  splitChain(arrayChain, agents, resources);
    if(mode === 1){
        for(var i = 0; i < agents; i++)
            result[i] = formalizePreferences(result[i], agents, resources);
    }
    return result;
}

/*
* Formalizes the preferences of an agent
*/
function formalizePreferences(preferences, numAgents, numResources){
    var aux = 0;
    for(var i = 0; i < numResources; i++)
        aux += parseInt(preferences[i]);
    aux = 1000 / aux;
    for(var i = 0; i < numResources; i++)
        preferences[i] =  Math.round(aux * preferences[i]);
    return preferences;
}

/*
* Splits the array in several arrays considering the number of agents
*/
function splitChain(arrayChain, numAgents, numResources){
    var result = [];
    var cont = 0;
    for(var i = 0; i < numAgents; i++){
        var temp = [];
        for(var j = 0; j < numResources; j++){
            temp[j] = parseInt(arrayChain[cont]);
            cont++;
        }
        result[i] = temp;
    }
    return result;
}

/*
* Check if the instance is for auction or optimization problem
*/
function typeProblem(id){
    if(id % 2 === 0)
        return "Auction problem";
    else
        return "Optimization problem";
}

/*
* Returns the number of agents
*/
function agentsInfo(setup){
    return hexToDecimal(setup[0]);
}

/*
* Returns the number of resources
*/
function resourcesInfo(setup){
    return hexToDecimal(setup[1]);
}

/*
* Check if the instance is unlimited or limited
*/
function mode(setup){
    var mode = hexToDecimal(setup[2]);
    if(mode === 0)
        return "Unlimited";
    else
        return "Limited";
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
* Builds an array of date as date format
*/
export function buildDateArray(_arrayRandoms) {
    let result = [];
    for (let i = 0; i < _arrayRandoms.length; i++)
        result.push(buildDate(_arrayRandoms[i]));
    return result;
} 