function parseTree(obj) {
  return Object.entries(obj).map(([k, v]) => {
    const result = {};
    if (v === 'true' || v === 'false') {
      result[k] = Boolean(v);
    } else if (!Number.isNaN(v)) {
      result[k] = Number(v);
    } else if (Array.isArray(v) && v.length === 1) {
      const [val] = v;
      result[k] = val;
    } else if (typeof v === 'object') {
      result[k] = parseTree(v);
    }
    return result;
  });
}

// for (let k in obj) {
//   if (typeof obj[k][0] === 'string') {
//     if (obj[k][0] == parseInt(obj[k][0])) {
//       obj[k] = parseInt(obj[k][0]);
//     } else if (obj[k][0] == 'true' || obj[k][0] == 'false') {
//       obj[k] = (obj[k][0] == 'true');
//     } else {
//       obj[k] = obj[k][0];
//     }
//   } else if (typeof obj[k] === 'object') {
//     if (obj[k].length == 1) {
//       obj[k] = obj[k][0];
//     }
//     parseTree(obj[k]);
//   }
// }

module.exports = parseTree;
