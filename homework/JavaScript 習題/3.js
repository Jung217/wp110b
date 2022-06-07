function IsPrime(num){
    let ans=0
    for(let a = 2; a <= num/2; a++)
    {
        if(num % a == 0)
        {
            ans = 1;
            break;
        }
    }
    if(ans==0) return ("ture");
    else return ("false");
}
console.log(IsPrime(91))
