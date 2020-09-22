// 1. O(1) O(n)
// 2. O(1) theres always the same amount of processes regardless of the value.
// 3. O(n^2) the for loops are nested. 
// 4. O(n) there are no conditionals and the number of processes is based on the size of the array.
// 5. O(n) the number of processes is based on the size of the array.
// 6. O(n^2) the for loops are nested.
// 7. It generates a Fibonacci sequence. The runtime complexity is Linear. It's always going to run (num) iterations.
// 8. O(log(n)) The function cuts the size of the input down as it progresses through the loop.
// 9. O(1) The function always does the same amount of processes regardless of the input.
// 10. The function returns true for numbers greater than 2 if they are odd. O(1). The amount of processes is not based on the input.
// 11. after 7 calls disk 1 = C, disc 2 = C,3 = C,4 = A, 5 = A. 7. It requires 7 moves for 3 disks, 15 moves for 4, 31 for 5. The runtime of the algorithm is O(2^n).
// function hanoi(count = 0,disc, src, aux, dst) {
//     if (disc > 0) {
//         hanoi(count,disc - 1, src, dst, aux);
//         console.log(++count ,'Move disc ' + disc + ' from ' + src + ' to ' + dst + '<br />');
//         hanoi(count,disc - 1, aux, src, dst);
//     }
// }

// hanoi(0, 5, 'A', 'B', 'C');

// 12. 
function countSheep(n) {
    for (let i = n; i > 0; i--) {
        console.log(i + ': Another sheep jumps over the fence');
    }
    console.log('All sheep jumped over the fence');
}
// countSheep(3);

function powerCalculator(base, exponent) {
    if (exponent < 0) {
        console.log('exponent should be >=0')
    }
    let total = 1;
    for (i = 1; i <= exponent; i++) {
        total = base * total
        console.log('total', total)
    }
}
// powerCalculator(10,3);

function reverseString(stringVal) {
    let newVal = '';
    for (let i = stringVal.length - 1; i >= 0; i--) {
        console.log(newVal += stringVal[i]);
    }
}

// reverseString("hello");

function triangular(num) {
    let newVal = 0;
    for (let i = num; i > 0; i--) {
        console.log(newVal += i);
    }
}

// triangular(4);

function splitter(stringVal, sep) {
    let newArr = [];
    let token = '';
    for (let i = 0; i < stringVal.length; i++) {
        if (stringVal[i] === "/") {
            newArr.push(token)
            token = '';
        } else {
            token += stringVal[i];
        }
    }
    newArr.push(token);
    console.log(newArr)
}

// splitter("02/20/2020","/");

function fibonacci(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(1);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    console.log(result);
}
// fibonacci(5);

function factorial(num) {
    let newVal = 1;
    for (let i = num; i > 0; i--) {
        newVal = newVal*i;
        console.log(newVal);
    }

}
// factorial(5);
// 13. All functions are O(n).
// 14. All functions are O(n).