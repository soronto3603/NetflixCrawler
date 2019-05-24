let crawler = require("../lib/crawler");
console.log(crawler.NetflixCrawler(
    "https://www.netflix.com/kr/browse/genre/83",
    // [
    //     name : { 
    //         T : /{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}[^"]*/gi,
    //         Pr : /{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}/gi,
    //         Po : /.{3}u.{5}[^"]*/gi
    //     },
    //     url : {
    //         T : /{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}[^"]*/gi,
    //         Pr : /{.@.{7}L.{10}p.{9}[^,]*.{18}T.{10}n.{6}[^"]*.{3}u.{5}/gi,
    //         Po : / /gi
    //     }
    // ]
    ));

// console.log(crawler.get());