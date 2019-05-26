var fs = require('fs');
 
// 동기적 읽기
var text = fs.readFileSync('main.json', 'utf8');
var a = JSON.parse(text);

console.log(a);

let Cr = require("../lib/crawler");
let nml = require("../model/netflixmovie");

let nl = new nml.NetflixMovie();

console.log(nl);

let count = 0;
let len = a.length;
console.log(len);

// crawler = new Cr.NetflixCrawler(a[0].url,()=>{
//     let year = crawler.crawlData({
//         T : /.s.{4}c.{6}t.{10}m.{13}i.{4}year.{17}year..[^<]*/gi, 
//         Pr : /.s.{4}c.{6}t.{10}m.{13}i.{4}year.{17}year../gi,
//         Po : / /gi
//     });

//     let actor = crawler.crawlData({
//         T : /.s.{11}t.{26}d.{9}i.{4}s.{9}[^<]*/gi,
//         Pr : /.s.{11}t.{26}d.{9}i.{4}s.{9}/gi,
//         Po : / /gi
//     })
//     nl.appendNM(a[0].name,a[0].url,year[0],actor[0]);
//     console.log(a[0].name,a[0].url,year[0],actor[0]);
// });
// data complete : https://www.netflix.com/kr/title/80204451
// [{"name":"격투맨 바키","url":"https://www.netflix.com/kr/title/80204451","year":"2018","actor":["시마자키노부나가"," 스고타카유키"," 시마다빈"]}]

// https://www.netflix.com/kr/title/80244996
// crawler = new Cr.NetflixCrawler( "https://www.netflix.com/kr/title/80244996" ,()=>{
//     let year = crawler.crawlData({
//         T : /.s.{4}c.{6}t.{10}m.{13}i.{4}year.{17}year..[^<]*/gi, 
//         Pr : /.s.{4}c.{6}t.{10}m.{13}i.{4}year.{17}year../gi,
//         Po : / /gi
//     });

//     let actor = crawler.crawlData({
//         T : /.s.{11}t.{26}d.{9}i.{4}s.{9}[^<]*/gi,
//         Pr : /.s.{11}t.{26}d.{9}i.{4}s.{9}/gi,
//         Po : / /gi
//     })
//     nl.appendNM(a[1].name,a[1].url,year[0],actor[0]);
//     console.log(a[1].name,a[1].url,year[0],actor[0]);
// });
// data complete : https://www.netflix.com/kr/title/80117291
// 원펀맨 https://www.netflix.com/kr/title/80117291 2015 후루카와마코토, 이시카와가이토, 가지유키

// let fuck = setInterval(()=>{
//     if(count == len -1 ){
//         clearInterval(fuck);
//     }
//     console.log("Request : " + a[count].url);
//     crawler = new Cr.NetflixCrawler(a[count].url,()=>{
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
//         nl.appendNM(a[count].name,a[count].url,year[0],actor[0]);
//         console.log(a[count].name,a[count].url,year[0],actor[0]);
//     });
//     count++;
// },10000);