const axios = require("axios")

class TrendingRequester {
    static async requestVideoPage(channelURL) {
        const config = {
            headers: {
                'x-youtube-client-name': '1',
                'x-youtube-client-version': '2.20180222',
                'accept-language': 'en-US,en;q=0.5'
            }
        }
        try {
            return await axios.get(channelURL, config)
        } catch (e) {
            return {
                error: true,
                message: e
            }
        }
    }
}
module.exports = TrendingRequester
