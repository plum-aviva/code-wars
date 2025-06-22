function findOutlier(integers) {
    let oddCount = 0
    let evenCount = 0
    let oddNumber = []
    let evenNumber = []

    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 != 0) {
            oddCount += 1
            oddNumber.push(integers[i])

        } else if (integers[i] % 2 === 0) {
            evenCount += 1
            evenNumber.push(integers[i])
        }
    }

    if (oddNumber.length > evenNumber.length) {
        return evenNumber[0]
    } else if (evenNumber.length > oddNumber.length) {
        return oddNumber[0]
    }
}




console.log(findOutlier([45, 99, 36]))


// below works when first number is not the outlier 
// function findOutlier(integers) {
//     if (integers[0] % 2 === 0) {

//         for (let i = 0; i < integers.length; i++) {
//             if (integers[i] % 2 != 0) {
//                 return integers[i]
//             }

//         }
//     } else if (integers[0] % 2 != 0) {
//         for (let i = 0; i < integers.length; i++) {
//             if (integers[i] % 2 === 0) {
//                 return integers[i]
//             }
//         }
//     }
// }
// console.log(findOutlier([1, 2, 3]))
// console.log(findOutlier([2, 4, 6, 9]))