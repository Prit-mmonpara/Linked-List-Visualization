const obj = new Map();

function getVal(key) {
    const data = obj.get(key);
    if (!data) return null;

    const { validation, ...val } = data;

    if (new Date().getTime() < validation) {
        return val;
    } else {
        obj.delete(key);
        return null;
    }
}

function setVal(key, nestedKey, validation) {
    const validation2 = new Date().getTime() + validation;
    obj.set(key, { nestedKey, validation: validation2 });
}

setVal("John", "Doe", 2000);
setVal("James", "Anderson", 3000);
setVal("Emily", "Carter", 4000);

const validationIntervalId = setInterval(() => {
    for (let key of obj.keys()) {
        console.log(getVal(key));
    }
}, 1000);

setTimeout(() => {
    clearInterval(validationIntervalId);
    console.log('Validation time Expired');
}, 6000);
