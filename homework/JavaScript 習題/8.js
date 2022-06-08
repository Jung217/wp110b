function add(ary0, ary1){
    for(let i = 0 ; i < ary0.length ; i++)
    {
        for(let j = 0 ; j < ary0[0].length ; j++)
        {
            ary0[i][j] += ary1[i][j];
        }
    }
    return ary0;
}
console.log(add([[1,2],[3,4]], [[1,1],[1,1]]))