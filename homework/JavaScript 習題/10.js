function integral(fn, lb, hb){
    let ans=0;
    for(let i = 0 ; i < hb ; i+=0.0000001) ans += fn(i)*0.0000001
    return ans;
}
console.log(integral((x)=>x*x, 0, 1))