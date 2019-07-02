const parseTree = (obj) => {
    for (k in obj) {
        if (typeof obj[k][0] == 'string') {
            if (obj[k][0] == parseInt(obj[k][0])) {
                obj[k] = parseInt(obj[k][0]);
            }
            else if (obj[k][0] == "true" || obj[k][0] == "false") {
                obj[k] = (obj[k][0] == "true");
            }
            else {
                obj[k] = obj[k][0];
            }
        }
        else if (typeof obj[k] == 'object') {
            if (obj[k].length == 1) {
                obj[k] = obj[k][0];
            }
            parseTree(obj[k]);
        }
    }
    return obj;
}

module.exports = parseTree;