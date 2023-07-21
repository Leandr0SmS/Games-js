export const imgSelectorArray = (num) => {
    const numRound = Math.floor(num);
    const randomNumbers = [];
    while (randomNumbers.length < numRound * 2) {
        const randomNum = Math.floor(Math.random() * numRound) + 1;
        const filtered = randomNumbers.filter(e => {
            const regex = /[a-zA-Z]/g;
            if (e.id) return e.id.replace(regex, "") == randomNum
            });
        if (filtered.length == 0) {
            randomNumbers.push({id: randomNum + 'a', toggle: false})
        } else if (filtered.length == 1) {
            randomNumbers.push({id: randomNum + 'b', toggle: false})
        }
    }
    return randomNumbers;
};