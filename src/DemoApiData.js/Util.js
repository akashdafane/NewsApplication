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

export function addFilterIfNotExists(filter, userInfo) {
    let index = userInfo.indexOf(filter);
    if (index === -1) userInfo.push(filter);

    return userInfo;
}

export function removeFilter(filter, userInfo) {
    let index = userInfo.indexOf(filter);
    userInfo.splice(index, 1);
    return userInfo;
}
