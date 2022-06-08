function mean(ary){
    let sum=0, ave=0;
    for(let i=0 ; i < ary.length ; i++)
    {
        sum += ary[i];
    }
    ave = sum/ary.length;
    return ave;
}
console.log(mean([1,2,3,4,5]))