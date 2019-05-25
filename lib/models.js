class NetflixMovie{
    constructor(name=null,url=null,year=null,actor=null){
        this.name = name;
        this.url = url;
        this.year = year;
        if(typeof actor == "string"){
            // actor string example.
            // "주지훈, 류승룡, 배두나"  
            this.actor = actor.split(",");
        }else if(typeof actor == "object"){
            this.actor = actor;
        }else{
            this.actor = actor;
        }
    }
}
class NetflixMovieList{
    constructor(){
        this.nml = [];
        this.columns = [];
        this.columns_len = null;
    }
    appendNM(name,url,year,actor){
        this.nml.push(new NetflixMovie(name,url,year,actor));
    }
    appendColumns( col ){
        if( this.columns_len == null ){
            this.columns_len = col.length;
        }else if( this.columns_len != col.length ){
            console.warn("not correct each columns");
        }
        this.coumns.push(col);
        
    }
    assemble(){
        for(var i=0;i<this.columns_len;i++){
            this.nml.appendNM(
                this.columns[0][i],
                this.columns[1][i],
                this.columns[2][i],
                this.columns[3][i]
                );
        }
    }
}