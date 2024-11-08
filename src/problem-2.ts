function removeDuplicates (nums:number[]) : number []{
    const removedArray: number[] = [];
    nums.forEach((num)=> {
       const check: number|undefined = removedArray.find((val)=> val === num);
        if(!check){
            removedArray.push(num);
        }
    }
    );
    return removedArray;
}