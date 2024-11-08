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
