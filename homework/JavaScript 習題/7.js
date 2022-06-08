function transpose(ary){
    let a=[], b=[], c=[];
    a=ary[0];
    b=ary[1];
    for(let i = 0 ; i < a.length ; i++)
    {
        c[i]=[a[i],b[i]]; 
    }
    return c;
}
console.log(transpose([[1,2,3], [3,2,1]]))