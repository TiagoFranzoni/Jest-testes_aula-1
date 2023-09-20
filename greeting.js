const greeting = (name) => {

    if (name === undefined){
        throw new Error("Name is not undefined");
    }
    
    if (name.length === 0) {
        throw new Error("Name is required");
    }

    return `Hello ${name}`;
}

module.exports = greeting