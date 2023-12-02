const { fetch, ProxyAgent } = require('undici');
const proxy = process.env.PROXY_URI;
const dispatcher = proxy ? new ProxyAgent({ uri: proxy }) : null;

const HomeLatestTimeline = () =>
    fetch(
        'https://twitter.com/i/api/graphql/4lamDJErKVeOVyGh-y2UXQ/HomeLatestTimeline?variables=%7B%22count%22%3A20%2C%22includePromotedContent%22%3Atrue%2C%22latestControlAvailable%22%3Atrue%2C%22requestContext%22%3A%22launch%22%7D&features=%7B%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_home_pinned_timelines_enabled%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Afalse%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_media_download_video_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D',
        {
            dispatcher,
            headers: {
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
                'content-type': 'application/json',
                'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"macOS"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'x-client-transaction-id': 'TT6hQBkTtHoSRM01ASY8t3T4vkz7uQpWEmAIdSRZQJfUldBgd7Fkg94GaNHjyrm6lyE/Vkw2Qt65u6J4Ksk7NM1JoDFRTA',
                'x-csrf-token': '70391e6fc947b02125b97ee588b0585ad1e07296b90db1ccbfb88ce448dbc5a29f1520a58f5436bf7aa6e257de0fc7527962ed388ccc40fa1c38add54bfccdc8ea90ad1aa5b4948ae75104609f2b0d0e',
                'x-twitter-active-user': 'yes',
                'x-twitter-auth-type': 'OAuth2Session',
                'x-twitter-client-language': 'en',
                cookie: '_ga=GA1.2.543590153.1701499978; _gid=GA1.2.1496210509.1701499978; guest_id=v1%3A170149997819838824; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCGlhTSmMAToMY3NyZl9p%250AZCIlNDJmZTg2YjM3ZjBlMzdkZThiYTg5YjU4NGNiNDVlMWU6B2lkIiVkZTMy%250AMGE0NDJjMTRlNWQ4ZmQyMzU2MGU4Y2RjNTQzYw%253D%253D--41bf4fb84652450f4dcd8a1f88f77e24175a658c; g_state={"i_l":0}; kdt=EPLk3NuKpH6Exae3T5BhFQurECSolv8dJPfJVk6A; auth_token=6a85554e7afda59d68e5460a560713caa2d75494; ct0=70391e6fc947b02125b97ee588b0585ad1e07296b90db1ccbfb88ce448dbc5a29f1520a58f5436bf7aa6e257de0fc7527962ed388ccc40fa1c38add54bfccdc8ea90ad1aa5b4948ae75104609f2b0d0e; att=1-f9uZhuWMK8A8opatTlfWr2ZKXGRbmRArnneWkgjo; guest_id_ads=v1%3A170149997819838824; guest_id_marketing=v1%3A170149997819838824; lang=en; twid=u%3D17097185; personalization_id="v1_K1CwGbVIgQHDax1OTGNZiQ=="',
                Referer: 'https://twitter.com/home',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
            },
            body: null,
            method: 'GET',
        }
    );

const SearchTimeline = () =>
    fetch(
        'https://twitter.com/i/api/graphql/lMv4QkY3vpla38q9tiD-tA/SearchTimeline?variables=%7B%22rawQuery%22%3A%22mm2h%22%2C%22count%22%3A20%2C%22querySource%22%3A%22saved_search_click%22%2C%22product%22%3A%22Top%22%7D&features=%7B%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_home_pinned_timelines_enabled%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Afalse%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_media_download_video_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D',
        {
            dispatcher,
            headers: {
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
                'content-type': 'application/json',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'x-client-transaction-id': 'z1tawrRpxVbApVt3E5Ms3WWskeGmVAPMyeq8CEF09aOsgsRSk9C0sz1xmL6Q3WMy+qC81M5YM/xSihHFI1KxX7bU+sc+zg',
                'x-csrf-token': '70391e6fc947b02125b97ee588b0585ad1e07296b90db1ccbfb88ce448dbc5a29f1520a58f5436bf7aa6e257de0fc7527962ed388ccc40fa1c38add54bfccdc8ea90ad1aa5b4948ae75104609f2b0d0e',
                'x-twitter-active-user': 'yes',
                'x-twitter-auth-type': 'OAuth2Session',
                'x-twitter-client-language': 'en',
                cookie: '_ga=GA1.2.543590153.1701499978; _gid=GA1.2.1496210509.1701499978; guest_id=v1%3A170149997819838824; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCGlhTSmMAToMY3NyZl9p%250AZCIlNDJmZTg2YjM3ZjBlMzdkZThiYTg5YjU4NGNiNDVlMWU6B2lkIiVkZTMy%250AMGE0NDJjMTRlNWQ4ZmQyMzU2MGU4Y2RjNTQzYw%253D%253D--41bf4fb84652450f4dcd8a1f88f77e24175a658c; g_state={"i_l":0}; kdt=EPLk3NuKpH6Exae3T5BhFQurECSolv8dJPfJVk6A; auth_token=6a85554e7afda59d68e5460a560713caa2d75494; ct0=70391e6fc947b02125b97ee588b0585ad1e07296b90db1ccbfb88ce448dbc5a29f1520a58f5436bf7aa6e257de0fc7527962ed388ccc40fa1c38add54bfccdc8ea90ad1aa5b4948ae75104609f2b0d0e; att=1-f9uZhuWMK8A8opatTlfWr2ZKXGRbmRArnneWkgjo; guest_id_ads=v1%3A170149997819838824; guest_id_marketing=v1%3A170149997819838824; lang=en; twid=u%3D17097185; personalization_id="v1_AmvGOY32hgJPeOVArzqQWg=="',
                Referer: 'https://twitter.com/search?q=mm2h&src=saved_search_click',
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
                    let quote = t.quoted_status_result?.result;
                    if (quote) {
                        if (!quote.legacy) {
                            quote = quote.tweet;
                        }
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
