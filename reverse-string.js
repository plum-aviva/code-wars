function solution(str) {
    let newString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i];

    }
    return newString
}

console.log(solution("cat"));

/// cat => tac 
// go through each letter 
// reverse index of
// cat 
// c = 0
// a = 1 
// t = 2

// c = 2
// a = 1 
// t = 0 

// start at the end of the string - and work backwards 