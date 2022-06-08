function factor(num){
    let a=2, b=0, fa=[];
    while(num>1)
    {
        while( num % a == 0 )
        {
            fa[b] = a;
            b++;
            num /= a;
        }
        a++;
    }
    return fa;
}
console.log(factor(45))