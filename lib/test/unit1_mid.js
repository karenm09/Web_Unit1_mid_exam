// Write a method that doubles each element in an array.

function doubler(array) {
    return array.reduce((acc, el) => {
        acc.push(el * 2)
        return acc
    }, [])
}

// Write a method that returns the factors of a number in ascending order.
// Factors are numbers that divide evenly into a number.

function factors(num) { 
    
}


// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements.

function median(arr) {
    const midNum = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[midNum - 1] + arr[midNum]) / 2;
    }

    return arr[midNum];
}


// Write a method that returns the product of all numbers in an array.

function product(arr) {
    return arr.reduce((acc, el) => {
        acc *= el
        return acc
    }, 1)
}

// Write a method that returns the largest number in an array.

function largest(arr) {
    return arr.reduce((maxNum, el) => {
        if (maxNum < el) {
            maxNum = el
        }
        return maxNum
    }, arr[0])
}

// Write a method called 'and' that takes in two arguments. It should check
// return whether or not both arguments have a truthy value.

function and(arg1, arg2) {
    if (arg1 !== false && arg1 !== 0 && arg1 !== null && arg1 !== NaN && arg1 !== "" && arg1 !== undefined && arg2 !== false && arg2 !== 0 && arg2 !== null && arg2 !== NaN && arg2 !== "" && arg2 !== undefined) {
        return true
    } else {
        return false
    }
}


// Write a function that takes in an array and a target. Return whether or
// not the array contains the target

function includes(arr, target) {
    let isThere = arr.includes(target)
    return isThere
  }


// Write a function that removes all the vowels from a string.

function disemvowel(str) {
    const vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    }
    let array = str.split('');
    let output = array.filter(char =>{
        return !vowels[char.toLowerCase()]
    }).join('');
    return output
}

module.exports = { doubler, factors, median, product, largest, and, includes, disemvowel };
