"use strict";
function removeDuplicates(nums) {
    const removedArray = [];
    nums.forEach((num) => {
        const check = removedArray.find((val) => val === num);
        if (!check) {
            removedArray.push(num);
        }
    });
    return removedArray;
}
const d = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(d);
