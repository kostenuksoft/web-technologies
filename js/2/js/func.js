function findMinMax(numbers) {

    if (!Array.isArray(numbers) || numbers.length === 0) {
        console.log("non-empty array of numbers must be provided");
        return null;
    }
   
    let max = numbers[0];
    let min = numbers[0];

    for (let i = 1; i < numbers.length; ++i) {

        if (numbers[i] > max) {
            max = numbers[i];
        }

        if (numbers[i] < min ) {
            min = numbers[i];
        }
    }

    return {
        foundMax: max,
        foundMin: min
    };
}

function compareObjects(obj1, obj2, properties) {
    const results = { };

    for (const prop of properties) {
        results[prop] =
        {
            isEqual:    obj1[prop] === obj2[prop],
            comparison: obj1[prop] > obj2[prop] ? "greater" :
                        obj1[prop] < obj2[prop] ? "less" : "equal"
        };
    }

    return results;
}

function isInRange(number, min, max) {
    return number >= min && number <= max;
}

function toggleBoolean(value) {
    return !value;
}

function getGradeDescription(grade) {
    if (grade >= 90) {
        return "excellent";
    } else if (grade >= 70) {
        return "good";
    } else if (grade >= 50) {
        return "satisfactory";
    } else {
        return "unsatisfactory";
    }
}

function getGradeDescriptionTernary(grade) {
    return grade >= 90 ? "excellent" :
           grade >= 70 ? "good" :
           grade >= 50 ? "satisfactory" : "unsatisfactory";
}

function getSeason(month) {

    if (month < 1 || month > 12) {
        return "invalid month";
    }

    if (month >= 3 && month <= 5) {
        return "spring";
    } else if (month >= 6 && month <= 8) {
        return "summer";
    } else if (month >= 9 && month <= 11) {
        return "autumn";
    } else {
        return "winter";
    }
}

function getSeasonTernary(month) {
    return month < 1 || month > 12 ? "invalid month" :
           month >= 3 && month <= 5 ? "spring" :
           month >= 6 && month <= 8 ? "summer" :
           month >= 9 && month <= 11 ? "autumn" : "winter";
}