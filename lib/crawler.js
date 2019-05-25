
class NetflixCrawler{
    constructor( url , callback){
        this.https = require('https');

        // Queue
        // const Q = require("../lib/queue");
        // this.q = new Q.Q();

        // URL
        this.url = url;
        
        // properties
        this.contents = "";
        
        // initialize process
        this.requestData( this.url ,callback );
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

                callback();
            });
        });
    }
    crawlData( regxs ){
        // regxs{} example
        // T : /{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}[^"]*/gi,
        // Pr : /{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}/gi,
        // Po : / /gi
        
        
        // if( this.contents == "" ){
        //     this.q.push(regxs);
        //     return ;
        // }
        let founds = this.contents.match( regxs.T );
        let result = [];
        for(var i=0;i<founds.length;i++){
            var target = founds[i].replace( regxs.Pr ,"")
                                .replace( regxs.Po ,"");
            result.push(target);
        }
        return result;
    }
}
// const NetflixCrawler = ( url , targets , regx )=>{
//     const https = require('https');

//     https.get(url, (resp) => {
//     let data = '';

//     // A chunk of data has been recieved.
//     resp.on('data', (chunk) => {
//         data += chunk;
//     });

//     // The whole response has been received. Print out the result.

//     resp.on('end', () => {
//         let result = [];

//         let found = data.match(/{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}[^"]*/gi);
   
//         for(var i=0;i<found.length;i++){
//             var name = found[i].replace(/{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}/gi,"")
//                                 .replace(/.{3}u.{5}[^"]*/gi,"");
//             var url = found[i].replace(/{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}/gi,"")
//                                 .replace(/ /gi);

//             result.push({
//                 name : name,
//                 url : url,
//             });
//         }

//         console.log(result);
        
//         // const fs = require('fs');
//         // fs.writeFile("../netflix.html",data,(err)=>{
//         //     if(err)return console.log(err);
//         //     console.log("The file was saved!");
//         // })
//     });

//     }).on("error", (err) => {
//         console.log("Error: " + err.message);
//     });


// }

module.exports.NetflixCrawler = NetflixCrawler;