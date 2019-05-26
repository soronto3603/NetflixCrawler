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
        this.writeJson();
    }
    writeJson(){
        var fs = require('fs');
                
        fs.writeFile('output.json', JSON.stringify(this.nml), 'utf8', function(err) {
            // console.log('file write complete');
        });
    }
}

module.exports.NetflixMovie = NetflixMovieList;