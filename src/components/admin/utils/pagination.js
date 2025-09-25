export const generateMultiplesOf10 = (totalNumber) => {
    let num = Math.ceil(totalNumber / 10);
    const multiplesOf10 = [];

    for (let i = 1; i <= num; i++) {
        multiplesOf10.push(i * 10);
    }
    return multiplesOf10;
};
