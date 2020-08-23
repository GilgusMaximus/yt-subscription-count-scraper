const axios = require("axios")

class TrendingRequester {
    static async requestVideoPage(videoUrl) {
        const config = {
            headers: {
                'x-youtube-client-name': '1',
                'x-youtube-client-version': '2.20200811.05.01',
                'accept-language': 'en-US,en;q=0.5',
                'X-YouTube-Device': 'cbr=Firefox&cbrver=79.0&ceng=Gecko&cengver=79.0&cos=Windows&cosver=10.0',
                'Origin': 'https://www.youtube.com',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0'

            }
        }
        try {
            return await axios.get(videoUrl, config)
        } catch (e) {
            return {
                error: true,
                message: e
            }
        }
    }
}
module.exports = TrendingRequester
