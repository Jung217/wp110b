function filter357(lb,hb){
    let ans=[], a=0;
    for(lb ; lb<=hb ; lb++)
    {
        let check=0;
        if(lb % 3 == 0) check++;
        if(lb % 5 == 0) check++;
        if(lb % 7 == 0) check++;
        if(check == 0) 
        {
            ans[a]=lb;
            a++;
        }
    }
    return ans;
}
console.log(filter357(5,15))
