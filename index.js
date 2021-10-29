function updateInventory(arr1, arr2) {
    debugger;
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        newArr = newArr.push(arr1[i][2]);
    }

    // for (let j = 0; j < arr2.length; j++) {
    //     newArr2 = newArr2.push(arr2[j][2]);

    //     if (!newArr.includes(newArr2[j])) {
    //         arr1.push(arr2(j));
    //     }
    // }
    console.log(newArr);

    // return arr1;
}

// Example inventory

var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone'],
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste'],
];

updateInventory(curInv, newInv);
