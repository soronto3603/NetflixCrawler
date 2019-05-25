class Q{
    constructor(){
        this.l = [];
    }
    push(d){
        this.l.push(d);
    }
    pop(){
        return this.l.pop();
    }
    top(){
        return this.l[l.length-1];
    }
    isEmpty(){
        if( ! this.l.length ) return true;
        else return false;
    }
}
module.exports.Q = Q;