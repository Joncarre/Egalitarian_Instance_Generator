// Creates the structure for a JSON file
export const buildJSON = _oldChain => {
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
    const textFile = new Blob([json], { type: 'text/plain' }); //pass data from localStorage API to blob
    element.href = URL.createObjectURL(textFile);
    element.download = `3SAT_instance_${id}.json`;
    document.body.appendChild(element);
    element.click();
}