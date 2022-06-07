function fn (num){
    var ans=1
    for(let a = 1; a < num+1; a++) ans*= a ;
    return ans;
}
console.log(fn(10));