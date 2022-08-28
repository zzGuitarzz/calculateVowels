const checkVowels = (datas) => {
    // console.log('datas', datas);
    if (datas !== "") {
        const vowels = ["a", "e", "i", "o", "u"];
        const resultNumber = [];
        const data = datas.toLowerCase().split("");
        for (let xdata of data) {
            const result = vowels.find((dataVowels) => dataVowels === xdata);
            if (result) {
                resultNumber.push(result);
            }
        }
        return resultNumber.length;
    }
};
const sumVowels = (data) => {
    const Newdatas = data.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    let number = 0;
    for (let letters of Newdatas) {
        if (vowels.includes(letters)) {
            number++;
        }
    }
    // console.log("result cal", number);
    return number;
};
module.exports = {
    checkVowels,
    sumVowels
};
