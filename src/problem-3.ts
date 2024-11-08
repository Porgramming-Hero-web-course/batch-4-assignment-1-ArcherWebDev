function countWordOccurrences (main:string , sub: string) : number {
    main= main.toLowerCase();
    sub = sub.toLowerCase();
    
    let match: number = 0;
    for(let i =0;i< main.length; i++){
        let sz= 0;
        for(let j = 0;j<sub.length;j++){
            if(main[i+j] === sub[j]){
                sz++;
            }else{
                break;
            }
        }
        if(sz===sub.length){
            match++;
        }
    }
    return match;
}