function getMiddle(s) {

    if (s.length % 2 != 0) {
        let answer = Math.floor(s.length / 2)
        return s[answer]
    } else {
        let firstAnswerIndex = s.length / 2 - 1;
        let secondAnswerIndex = s.length / 2;
        let firstAnswerLetter = s[firstAnswerIndex]
        let secondAnswerLetter = s[secondAnswerIndex]
        return firstAnswerLetter + secondAnswerLetter

    }

}

console.log(getMiddle("Plum"))
console.log(getMiddle("PlumB"))
// cat = a
// plum = lu 
// splice => substring 

// JavaSri - middle index = 3 (middle letter - 7 letter word)
// coatstand (9 letter word - middle index = 4 )

// string.length / 2 math.floor (sum) 

// plum (return index 1 + 2 ) - length of word = 4
// cabage = 6 letter long - want index 2 + 3 
// cabbages = 8 letter word - want index 3 + 4 

// first returned letter = word length / 2 -1
// second returned letter = word length / 2 
