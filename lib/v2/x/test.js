const utils = require('../twitter/utils');
const { SearchTimeline, HomeLatestTimeline, gatherLegacyFromData } = require('./api.js');

async function getSearch(ctx) {
    let data = await SearchTimeline();
    data = await data.json();
    data = data.data.search_by_raw_query.search_timeline.timeline.instructions[0].entries;
    data = data
        .map((entry) => {
            if (entry.content.entryType !== 'TimelineTimelineItem') {
                return null;
            }
            const tweet = entry.content.itemContent.tweet_results.result.legacy;
            tweet.user = entry.content.itemContent.tweet_results.result.core.user_results.result.legacy;
            return tweet;
        })
        .filter((item) => item);
    return utils.ProcessFeed(ctx, { data }, { showAuthorInTitle: true });
}

async function getHomeLatest(ctx) {
    let data = await HomeLatestTimeline();
    data = await data.json();
    data = data.data.home.home_timeline_urt.instructions[0].entries;
    data = gatherLegacyFromData(data);
    return utils.ProcessFeed(ctx, { data }, { showAuthorInTitle: true });
}

module.exports = { getSearch, getHomeLatest };
