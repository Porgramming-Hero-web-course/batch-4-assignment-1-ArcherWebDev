function validateKeys<T>(obj: T, keys: (keyof T)[]) : boolean {
    let isValid = true;
    keys.forEach((key) => {
        if(!obj[key]){
            isValid = false;
        }
    })
    return isValid;
}
