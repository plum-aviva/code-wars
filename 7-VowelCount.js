function getCount(string) {
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;

    for (let i = 0; i < vowels.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (vowels[i] === string[j]) {
                count = count + 1

            }
        }
    }
    return count;
}

console.log(getCount("apple"))


// want to know how many "a", "e", "i", "o", "u"

