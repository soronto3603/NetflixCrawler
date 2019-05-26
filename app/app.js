// 크롤링 요청간 대기시간 상수.
const WAITING_TIME = 10000;

// Module load.
let Cr = require("../lib/crawler");
let nml = require("../model/netflixmovie");

// nml.
// NetflixMovieList
let nl = new nml.NetflixMovie();

// NetflixCrawler.
// url => https://www.netflix.com/kr/browse/genre/83
// target => name, url.
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
    
    var count = 0;
    var len = name.length;

    // 세부 페이지에 대한 크롤링
    // url => *
    // target => year, actor
    let crawlerInterval = setInterval(()=>{
        if(crawlerInterval == len -1)clearInterval(crawlerInterval);
        crawler = new Cr.NetflixCrawler(url[count],()=>{
            let year = crawler.crawlData({
                T : /.s.{4}c.{6}t.{10}m.{13}i.{4}year.{17}year..[^<]*/gi, 
                Pr : /.s.{4}c.{6}t.{10}m.{13}i.{4}year.{17}year../gi,
                Po : / /gi
            });
    
            let actor = crawler.crawlData({
                T : /.s.{11}t.{26}d.{9}i.{4}s.{9}[^<]*/gi,
                Pr : /.s.{11}t.{26}d.{9}i.{4}s.{9}/gi,
                Po : / /gi
            })
            nl.appendNM(name[count],url[count],year[0],actor[0]);
            console.log(`[${count}/${len}] =>`,name[count],url[count],year[0],actor[0]);
            count++;
        });
        
    },WAITING_TIME);
});