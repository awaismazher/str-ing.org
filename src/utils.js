export const colorsMap = {
    blue: '#0038FF',
    red: '#F00',
    green: '#2A9E4A',
    pink: 'deeppink',
};

export const allElementsExists = (arr1, arr2) => {
    // this function will be used to check all chip filters matched
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }
    return arr1.every((element) => arr2.includes(element));
};

export const commonElementExists = (arr1, arr2) => {
    // This function will be used to check if any filter matched
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }
    for (const val1 of arr1) {
        if (!['number', 'string'].includes(typeof val1)) {
            return false;
        }
        for (const val2 of arr2) {
            if (!['number', 'string'].includes(typeof val2)) {
                return false;
            }
            if (val1 === val2) return true;
        }
    }
    return false;
};

export const cut = (text, maxSize = 25, isThreeDots = true) => {
    if (text && text.length > maxSize) {
        const newText = text.slice(0, maxSize - 3);
        return isThreeDots ? `${newText}...` : newText;
    }
    return text;
};
