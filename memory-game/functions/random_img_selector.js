const imgs_selector = (num) => {
    const randomNumbers = [];
    for (let i = 0; randomNumbers.length <= num - 1; i++) {
        console.log(randomNumbers.length)
        const randomNum = Math.floor(Math.random() * num) + 1;
        randomNumbers.includes(randomNum) 
            ? randomNumbers 
            : randomNumbers.push(randomNum);
    }
    return randomNumbers;
};

console.log(imgs_selector(10));
