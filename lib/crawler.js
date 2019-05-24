const NetflixCrawler = ( url , targets , regx )=>{
    const https = require('https');

    https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.

    resp.on('end', () => {
        let result = [];
        
        for(var i=0;i<targets.length;i++){
            targets[i]
        }
        let found = data.match(/{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}[^"]*/gi);
        for(var i=0;i<found.length;i++){
            var name = found[i].replace(/{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}/gi,"")
                                .replace(/.{3}u.{5}[^"]*/gi,"");
            var url = found[i].replace(/{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}/gi,"")
                                .replace(/ /gi);

            result.push({
                name : name,
                url : url,
            });
        }

        console.log(result);
        
        // const fs = require('fs');
        // fs.writeFile("../netflix.html",data,(err)=>{
        //     if(err)return console.log(err);
        //     console.log("The file was saved!");
        // })
    });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });


}

module.exports.NetflixCrawler = NetflixCrawler;