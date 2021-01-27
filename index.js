module.exports = require("./src/Youtube-Scraper")
const s = require('./src/Youtube-Scraper')

async function f(){
    s.scrape_subscriber_count_from_channel('https://www.youtube.com/user/extra3').then((data)=>{
        console.log(data)
    })
}
f()
