function sumFirstTenFibonacci() {
    let a = 0,
        b = 1,
        count = 0,
        sum = 0;

    while (count < 10) {
        sum += a;
        const temp = a + b;
        a = b;
        b = temp;
        count++;
    }

    return sum;
}

function sumPrimes(upToValue) {
    function isPrime(num) {
        if (num <= 1) return false;

        for (let i = 2; i <= Math.sqrt(num); ++i) 
            if (num % i === 0) return false;
        
        return true;
    }

    //const isPrime = (num) =>  {
    //    for (let i = 2; i <= Math.sqrt(num); ++i)
    //        if (num % i === 0) return false;
    //    return true;
    //}

    let sum = 0;
    for (let i = 2; i <= upToValue; ++i)
        if (isPrime(i)) sum += i;
  
    return sum;
}

function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1: return "monday";
        case 2: return "tuesday";
        case 3: return "wednesday";
        case 4: return "thursday";
        case 5: return "friday";
        case 6: return "saturday";
        case 7: return "sunday";
        default: return "invalid day";
    }
}

function filterOddLengthStrings(arr) {
    const result = arr.filter(str => str.length % 2 !== 0);
    return result;
}

const incrementArray = arr => arr.map(num => num + 1);

function isSumOrDifferenceTen(a, b) {
    return (a + b === 10) || (Math.abs(a - b) === 10);
}