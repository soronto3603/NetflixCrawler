class NetflixCrawler{
    constructor( url , callback){
        this.https = require('https');

        // URL
        this.url = url;
        
        // properties
        this.contents = "";
        
        // initialize process
        this.requestData( this.url ,callback );
    }
    isSiteBlock(){
        let error_box = this.contents.match( /<div class="errorBox">/gi );
        let error_message = this.contents.match( /We were unable to process your request./gi );
        if( error_box != null ){
            console.log("Maby your IP has been BLOCK.");
            console.log(error_message[0]);
        }
    }
    requestData( url ,callback){
        this.https.get( url , (resp) =>{
            let html = '';
            
            resp.on('data',( d ) =>{
                html += d;
            });
            resp.on('end',(  ) => {
                console.log(`data complete : ${this.url}`);
                
                this.contents = html;
                this.isSiteBlock();
                callback();
            });
        });
    }
    crawlData( regxs ){
        // regxs{} example
        // T : /{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}[^"]*/gi,
        // Pr : /{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}/gi,
        // Po : / /gi
        
        let founds = this.contents.match( regxs.T );
        // if( founds == null ) return [""];
        let result = [];
        for(var i=0;i<founds.length;i++){
            var target = founds[i].replace( regxs.Pr ,"")
                                .replace( regxs.Po ,"");
            result.push(target);
        }
        return result;
    }
}


module.exports.NetflixCrawler = NetflixCrawler;