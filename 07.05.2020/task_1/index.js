const compareObjects = (object1, object2) => {
    if(JSON.stringify(object1) === JSON.stringify(object2))
    return true;
    return false;
};

// \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/

const compareObjects = (object1, object2) =>
    JSON.stringify(object1) === JSON.stringify(object2);