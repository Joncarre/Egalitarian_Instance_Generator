// Creates the structure for a JSON file
export const buildJSON = (_oldChain, agents, resources) => {
    console.log("CHAIN: " + _oldChain);
 
    let object = {};
    let names;
    for(let i = 0; i < agents; i++){
        let agentVector = [];
        names = "Agent_" + (i + 1);
        for(let j = 0; j < resources; j++){
            agentVector[j] = parseInt(_oldChain[i][j]);
        }
        object[names] = agentVector;
    }
    return JSON.stringify(object);
}

export const buildJSON_old = _oldChain => {
    let object = {};
    let chain = String(_oldChain).replace(/\D/g, '');
    let tempArray = Array.from(chain);
    let arrayValue = new Array(tempArray.length);
    let arraySign = new Array(tempArray.length);
    for (let i = 0; i < tempArray.length; i++) {
        arrayValue[i] = parseInt(tempArray[i]);
        if (Math.random() < 0.5)
            arraySign[i] = 1;
        else
            arraySign[i] = 0;
    }
    object.value = arrayValue;
    object.sign = arraySign;
    return JSON.stringify(object);
}

export const downloadJSON = (json, id) => {
    const element = document.createElement("a");
    const textFile = new Blob([json], { type: 'text/plain' }); // Pass data from localStorage API to blob
    element.href = URL.createObjectURL(textFile);
    element.download = `Egalitarian_instance_${id}.json`;
    document.body.appendChild(element);
    element.click();
}