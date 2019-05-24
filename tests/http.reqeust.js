const https = require('https')
var options = { host: 'www.netflix.com', 
                path: '/kr/browse/genre/83' };
const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    if( res.statusCode == 200 ) console.log("Test OK");

    // res.on('data', d => {
    //     process.stdout.write(d)
    // })
})

req.on('error', error => {
    console.error(error)
})

req.end()