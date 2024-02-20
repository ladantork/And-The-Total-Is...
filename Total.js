function sumNums(str) {
    const regex = /\d+/g;
    const matches = str.match(regex);
    if (matches === null) return 0;
    let total = 0;
    for(let i = 0; i < matches.length; i++){
        total += Number(matches[i]);
    }
    return total;
}
