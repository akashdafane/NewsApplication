export function sortAsc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return 1;

        if (b[field] > a[field]) return -1;

        return 0;
    });
}

export function sortDesc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return -1;

        if (b[field] > a[field]) return 1;

        return 0;
    });
}

export function addFilterIfNotExists(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    if (index === -1) appliedFilters.push(filter);

    return appliedFilters;
}

export function removeFilter(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    appliedFilters.splice(index, 1);
    return appliedFilters;
}


export const average = (subjects) => {
    var sum = 0;
    subjects.forEach((sub) => (sum = sum + sub.mark));
    return sum / subjects.length;
};


export const addition = (subjects) => {
    var sum = 0;
    subjects.forEach((sub) => (sum = sum + sub.mark));
    return sum
}

// export const getMax = (arr, prop) => {
//     var max;
//     for (var i=0 ; i<arr.length ; i++) {
//         if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
//             max = arr[i];
//     }
//     return max;
// }