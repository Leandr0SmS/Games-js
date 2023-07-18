export const imgSelectorArray = (num) => {
    const numRound = Math.floor(num);
    const randomNumbers = [];
    while (randomNumbers.length < numRound * 2) {
        const randomNum = Math.floor(Math.random() * numRound) + 1;
        const filtered = randomNumbers.filter(e => e[0] == randomNum);
        if (filtered.length == 0) {
            randomNumbers.push([randomNum, 'a'])
        } else if (filtered.length == 1) {
            randomNumbers.push([randomNum, 'b'])
        }
    }
    return randomNumbers;
};