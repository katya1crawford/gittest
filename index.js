function updateInventory(arr1, arr2) {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        newArr = newArr.push(arr1[i][1]);
    }

    return newArr;
}

var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste'],
];

updateInventory(curInv, newInv);
