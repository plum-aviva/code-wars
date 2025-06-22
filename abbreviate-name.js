function abbrevName(name) {
    let splitName = name.split(" ");
    let firstName = splitName[0];
    let firstInitial = firstName[0];
    let secondName = splitName[1];
    let secondInitial = secondName[0]
    let answer = `${firstInitial}.${secondInitial}`
    return answer.toUpperCase();



}

console.log(abbrevName("plum Bristow"))
// Daniel Bristow = D.B
// Plum Bristow

