function filterByTerm(arr, searchTerm) {
    if (!searchTerm) throw new Error("Term is empty!");
    if (!arr.length) throw ne Error("Array can't be empty");

    return arr.filter(arrItem => arrItem.url.match(searchTerm));
}

module.exports = filterByTerm;
