const requester = require("./ChannelRequester")

class YoutubeScraper{
    static async scrape_subscriber_count_from_channel(channelURL){
        const html_data = await requester.requestVideoPage(channelURL);
        return this.parse_html(html_data.data)
    }
    static parse_html(htmlData){
        const firstString = htmlData.match(/window\["ytInitialData"\](.)*/)
        if (firstString === null) {
            return 0
        }
        const secondString = firstString[0].match(/"subscriberCountText":\{"runs"(.)*/)
        if (secondString === null) {
            return 0
        }
        const thirdString = JSON.parse(secondString[0].match(/\{"text":"[^\}]*\}/)[0]).text
        return this.calculate_subscriber_number_from_string(thirdString)

    }
    static calculate_subscriber_number_from_string(subscribeString){
        const stringSequences = subscribeString.split(" ")
        if (stringSequences[0].charAt(stringSequences[0].length-1) === 'K') {
            return Number(stringSequences[0].substring(0, stringSequences[0].length-1)) * 1000
        } else if (stringSequences[0].charAt(stringSequences[0].length-1) === 'M') {
            return Number(stringSequences[0].substring(0, stringSequences[0].length-1)) * 1000000
        } else {
            return Number(stringSequences[0].substring(0, stringSequences[0].length))
        }
    }
}

module.exports = YoutubeScraper
