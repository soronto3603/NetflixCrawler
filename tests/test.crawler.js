let Cr = require("../lib/crawler");
let crawler = new Cr.NetflixCrawler("https://www.netflix.com/kr/browse/genre/83",()=>{
    let name = crawler.crawlData({
        T : /{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}[^"]*/gi,
        Pr : /{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}/gi,
        Po : /.{3}u.{5}[^"]*/gi
    });
    let url = crawler.crawlData({
        T:/{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}[^"]*/gi,
        Pr : /{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}/gi,
        Po : / /gi
    });
    
    let o = [];
    // temparay test.
    for(var i=0;i<name.length;i++){
        o.push({name:name[i],url:url[i]});
    }
    var fs = require('fs');
        
    fs.writeFile('main.json', JSON.stringify(o), 'utf8', function(err) {
        console.log('비동기적 파일 쓰기 완료');
    });

    // for(var i=0;i<url.length;i++){
    //     crawler = new Cr.NetflixCrawler(url[0],()=>{
    //         let year = crawler.crawlData({
    //             T : /.s.{4}c.{6}t.{10}m.{13}i.{4}year.{17}year..[^<]*/gi, 
    //             Pr : /.s.{4}c.{6}t.{10}m.{13}i.{4}year.{17}year../gi,
    //             Po : / /gi
    //         });
    
    //         let actor = crawler.crawlData({
    //             T : /.s.{11}t.{26}d.{9}i.{4}s.{9}[^<]*/gi,
    //             Pr : /.s.{11}t.{26}d.{9}i.{4}s.{9}/gi,
    //             Po : / /gi
    //         })
    //         console.log(name[i],url[i],year[0],actor[0]);
    //     });
    // }

    // for(var i=0;i<url.length;i++){
    //     crawler = new Cr.NetflixCrawler(url[i]);

    // }
    
});


// var fs = require('fs');
        
// fs.writeFile('text.html', crawler.contents, 'utf8', function(err) {
//     console.log('비동기적 파일 쓰기 완료');
// });


// console.log(crawler.get());