# YouTube Subscription Count Scraper NodeJS Documentation
This NodeJS library scrapes the channel page of a YouTube channel without any API usage. It is developed for and tailored towards easy usage in the [FreeTube](https://github.com/FreeTubeApp/FreeTube-Vue) rewrite but can be used with any other project as well.

Therefore, this library does not require any API keys, with the attached maximum quotas, but instead might take longer to receive the required data.

The library works as long as YouTube keeps its web page layout the same. Therefore, there is **no guarantee** that this library will work at all times.
If this library should not work at some point, please create an issue and let me know so that I can take a look into it. Pull requests are also welcomed in this case.

## Installation
`npm install yt-subscription-count-scraper`

## Usage
`const ytsubcounter = require("yt-subscription-count-scraper")`

## API
**scrape_subscriber_count_from_channel('channelURL')**

Takes a complete channel URL and returns the subscriber count as number.
```javascript
ytsubcounter.scrape_subscriber_count_from_channel("https://www.youtube.com/user/YouTube").then((data) =>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});
```
