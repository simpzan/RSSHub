const { fetch, ProxyAgent } = require('undici');
const proxy = process.env.PROXY_URI;
const dispatcher = proxy ? new ProxyAgent({ uri: proxy }) : null;

const HomeLatestTimeline = () =>
    fetch('https://twitter.com/i/api/graphql/HnVOsy-Rh_0Cuq06_z9lGA/HomeLatestTimeline', {
        dispatcher,
        headers: {
            accept: '*/*',
            'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7,zh;q=0.6',
            authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
            'content-type': 'application/json',
            'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'x-client-transaction-id': 'JbSpi0ftcY4judaAxmusykjDk2EGaq2t2BbNPhFjrCXtlZVxpnMsMcLWxHqZPhAz2Pga6iW+E84KOJCulm6OvYNZVXELJA',
            'x-csrf-token': 'dd68ad579b557dd1bd84150d233ef697988b9698f82af77c229f10c1399b7213ce1cab1d458bd4eae8672360a6a73089b54acf44eb86428da0c83077320c1239f7d4a1734a2235c743fcd792a928a651',
            'x-twitter-active-user': 'yes',
            'x-twitter-auth-type': 'OAuth2Session',
            'x-twitter-client-language': 'en',
            cookie: '_ga=GA1.2.1365282684.1687360263; lang=en; _gid=GA1.2.732230848.1695918525; g_state={"i_l":0}; guest_id=v1%3A169650532493911578; guest_id_marketing=v1%3A169650532493911578; guest_id_ads=v1%3A169650532493911578; gt=1709893381772529892; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCDz%252FmP%252BKAToMY3NyZl9p%250AZCIlYTIzYjcyYjViODNkZTZiOGVjOWJmMGQ2ZjU2NjExY2I6B2lkIiUyMDE0%250AN2MyNDcyZWFjYjEyNDE0Zjg2MzRiNjY4NWZmNA%253D%253D--f0c43e85a4abd65bc72c7e759946ac915f0f17de; kdt=8CVnsZ5bTQmINu4NuUyL1CYg2BvpK0nT5rRMHalm; auth_token=3995d1c4ef34f5c98756a70b4492424aef7f81be; ct0=dd68ad579b557dd1bd84150d233ef697988b9698f82af77c229f10c1399b7213ce1cab1d458bd4eae8672360a6a73089b54acf44eb86428da0c83077320c1239f7d4a1734a2235c743fcd792a928a651; twid=u%3D17097185; att=1-2qR5FIt5oQUBHg1g3b8RBZx4oD1Qr6j8yqOsc4lI; personalization_id="v1_TvL+VpUbp6fDcTzVfIeK2w=="',
            Referer: 'https://twitter.com/home',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: '{"variables":{"count":20,"includePromotedContent":true,"latestControlAvailable":true,"requestContext":"launch","seenTweetIds":["1709893698316910680","1709893718004965401"]},"features":{"responsive_web_graphql_exclude_directive_enabled":true,"verified_phone_label_enabled":false,"responsive_web_home_pinned_timelines_enabled":false,"creator_subscriptions_tweet_preview_api_enabled":true,"responsive_web_graphql_timeline_navigation_enabled":true,"responsive_web_graphql_skip_user_profile_image_extensions_enabled":false,"tweetypie_unmention_optimization_enabled":true,"responsive_web_edit_tweet_api_enabled":true,"graphql_is_translatable_rweb_tweet_is_translatable_enabled":true,"view_counts_everywhere_api_enabled":true,"longform_notetweets_consumption_enabled":true,"responsive_web_twitter_article_tweet_consumption_enabled":false,"tweet_awards_web_tipping_enabled":false,"freedom_of_speech_not_reach_fetch_enabled":true,"standardized_nudges_misinfo":true,"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled":true,"longform_notetweets_rich_text_read_enabled":true,"longform_notetweets_inline_media_enabled":true,"responsive_web_media_download_video_enabled":false,"responsive_web_enhance_cards_enabled":false},"queryId":"HnVOsy-Rh_0Cuq06_z9lGA"}',
        method: 'POST',
    });

const SearchTimeline = () =>
    fetch(
        'https://twitter.com/i/api/graphql/-gmCbDQT9PsGve4uWNVGiQ/SearchTimeline?variables=%7B%22rawQuery%22%3A%22mm2h%22%2C%22count%22%3A20%2C%22querySource%22%3A%22saved_search_click%22%2C%22product%22%3A%22Latest%22%7D&features=%7B%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_home_pinned_timelines_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Afalse%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_media_download_video_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D',
        {
            dispatcher,
            headers: {
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7,zh;q=0.6',
                authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
                'content-type': 'application/json',
                'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"macOS"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'x-client-transaction-id': '2AgjSrE+1PMXL5jTq0pQquAiGuGX2fmP/WKaYCbEnjpLszMKfXdbnrKKmFOWp2EA9uGYF9hlKvbhhy6slVW8RjVztBKW2Q',
                'x-client-uuid': 'faf98189-7894-453c-8171-f1e2ecd46d18',
                'x-csrf-token': 'dd68ad579b557dd1bd84150d233ef697988b9698f82af77c229f10c1399b7213ce1cab1d458bd4eae8672360a6a73089b54acf44eb86428da0c83077320c1239f7d4a1734a2235c743fcd792a928a651',
                'x-twitter-active-user': 'yes',
                'x-twitter-auth-type': 'OAuth2Session',
                'x-twitter-client-language': 'en',
                cookie: '_ga=GA1.2.1365282684.1687360263; lang=en; _gid=GA1.2.732230848.1695918525; g_state={"i_l":0}; guest_id=v1%3A169650532493911578; guest_id_marketing=v1%3A169650532493911578; guest_id_ads=v1%3A169650532493911578; gt=1709893381772529892; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCDz%252FmP%252BKAToMY3NyZl9p%250AZCIlYTIzYjcyYjViODNkZTZiOGVjOWJmMGQ2ZjU2NjExY2I6B2lkIiUyMDE0%250AN2MyNDcyZWFjYjEyNDE0Zjg2MzRiNjY4NWZmNA%253D%253D--f0c43e85a4abd65bc72c7e759946ac915f0f17de; kdt=8CVnsZ5bTQmINu4NuUyL1CYg2BvpK0nT5rRMHalm; auth_token=3995d1c4ef34f5c98756a70b4492424aef7f81be; ct0=dd68ad579b557dd1bd84150d233ef697988b9698f82af77c229f10c1399b7213ce1cab1d458bd4eae8672360a6a73089b54acf44eb86428da0c83077320c1239f7d4a1734a2235c743fcd792a928a651; twid=u%3D17097185; att=1-2qR5FIt5oQUBHg1g3b8RBZx4oD1Qr6j8yqOsc4lI; personalization_id="v1_rCPU9IdtjFvogomFfH0lww=="',
                Referer: 'https://twitter.com/search?q=mm2h&src=saved_search_click&f=live',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
            },
            body: null,
            method: 'GET',
        }
    );

function gatherLegacyFromData(entries, filterNested = undefined, userId = undefined) {
    const tweets = [];
    const filteredEntries = [];
    entries.forEach((entry) => {
        const entryId = entry.entryId;
        if (entryId) {
            if (entryId.startsWith('tweet-')) {
                filteredEntries.push(entry);
            }
            if (filterNested && filterNested.some((f) => entryId.startsWith(f))) {
                filteredEntries.push(...entry.content.items);
            }
        }
    });
    filteredEntries.forEach((entry) => {
        if (entry.entryId) {
            const content = entry.content || entry.item;
            let tweet = content?.itemContent?.tweet_results?.result;
            if (tweet && tweet.tweet) {
                tweet = tweet.tweet;
            }
            if (tweet) {
                const retweet = tweet.legacy?.retweeted_status_result?.result;
                for (const t of [tweet, retweet]) {
                    if (!t?.legacy) {
                        continue;
                    }
                    t.legacy.user = t.core.user_results.result.legacy;
                    const quote = t.quoted_status_result?.result;
                    if (quote) {
                        t.legacy.quoted_status = quote.legacy;
                        t.legacy.quoted_status.user = quote.core.user_results.result.legacy;
                    }
                }
                const legacy = tweet.legacy;
                if (legacy) {
                    if (retweet) {
                        legacy.retweeted_status = retweet.legacy;
                    }
                    if (userId === undefined || legacy.user_id_str === userId + '') {
                        tweets.push(legacy);
                    }
                }
            }
        }
    });
    return tweets;
}

module.exports = { SearchTimeline, HomeLatestTimeline, gatherLegacyFromData };
