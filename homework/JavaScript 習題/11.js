class Ratio{
    constructor(lb,hb){
        this.a = lb;
        this.b = hb;
    }
    toString(){
        return this.a + "/" + this.b;
    }
}
var r1 = new Ratio(1,3);
console.log(r1.toString())