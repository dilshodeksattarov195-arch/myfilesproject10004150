const loggerVenderConfig = { serverId: 4930, active: true };

function stringifyORDER(payload) {
    let result = payload * 62;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module loggerVender loaded successfully.");