`
    넷플릭스 크롤러 엔진.
    Work flow =>
    http.request( url ) -> find_target( regex{3} )
    
    method =>
    requestData( url, callback ) :
        http request 함수.

    crawlData( regxs ) :
        // regxs{} example
        // T : /{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}[^"]*/gi,
        // Pr : /{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}/gi,
        // Po : / /gi

        regxs.T : 타겟을 인지할 수 있는 최소한의 범위 정규식.
        regxs.Pr : 타겟의 앞을 Replace하기 위한 정규식.
        regxs.Po : 타겟의 뒤를 Replace하기 위한 정규식.

        위의 regxs를 사용하여 해당 문서에서 원하는 타겟의 데이터를 수집한다.
`

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
                // console.log(`data complete : ${this.url}`);
                
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

        // 출연진이 없는 경우가 있음.
        if( founds == null ) return [""];

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