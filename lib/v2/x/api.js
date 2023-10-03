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
            'x-client-transaction-id': 'KX1R3cJ44cCBrBxcXd3fgeuP461o98/MHoqmNWTENswdMmsJLuZQVts8Sz2La0P55ti85SkFjPYMUwUnlSCGFerQNgOPKA',
            'x-client-uuid': 'faf98189-7894-453c-8171-f1e2ecd46d18',
            'x-csrf-token': 'fbcc7cb37bfebd1129ff157412dcb74284a674324920c4871e1d6e7596943a3905f7f91d83125f821be67dc4523028bd5eee19faab0946a8f5081d0ca8bd28183d453c779d1996250764ba408d97f2cb',
            'x-twitter-active-user': 'yes',
            'x-twitter-auth-type': 'OAuth2Session',
            'x-twitter-client-language': 'en',
            cookie: '_ga=GA1.2.1365282684.1687360263; lang=en; _gid=GA1.2.732230848.1695918525; guest_id=v1%3A169605847587288806; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCH%252BH9uSKAToMY3NyZl9p%250AZCIlNDAyYjk4MjMzZmRhZDM2NjY4M2FlOTBmM2MzZWY5YmY6B2lkIiVjZTk4%250AYmEyNmExOTIxMDQwY2U4ZDE2YmNiODJmMDYyNQ%253D%253D--7e2fece09a8cbfbd2c2bf577a2e41254cef4d78a; g_state={"i_l":0}; kdt=s8nhGUxRSUWN7qorYHMaBTtNSciC5YNeQkCeJksr; auth_token=6627d4e5ac8711b838ddac61190fa035f206f052; ct0=fbcc7cb37bfebd1129ff157412dcb74284a674324920c4871e1d6e7596943a3905f7f91d83125f821be67dc4523028bd5eee19faab0946a8f5081d0ca8bd28183d453c779d1996250764ba408d97f2cb; guest_id_ads=v1%3A169605847587288806; guest_id_marketing=v1%3A169605847587288806; twid=u%3D17097185; external_referer=padhuUp37zjgzgv1mFWxJ12Ozwit7owX|0|8e8t2xd8A2w%3D; personalization_id="v1_WaGYIFw5C3/soymonWOkwQ=="',
            Referer: 'https://twitter.com/home',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: '{"variables":{"count":40,"cursor":"DAABCgABF7gt02jAJxEKAAIXuCzwD5aBewgAAwAAAAEAAA","includePromotedContent":true,"latestControlAvailable":true,"seenTweetIds":["1709165468152398203"]},"features":{"responsive_web_graphql_exclude_directive_enabled":true,"verified_phone_label_enabled":false,"responsive_web_home_pinned_timelines_enabled":false,"creator_subscriptions_tweet_preview_api_enabled":true,"responsive_web_graphql_timeline_navigation_enabled":true,"responsive_web_graphql_skip_user_profile_image_extensions_enabled":false,"tweetypie_unmention_optimization_enabled":true,"responsive_web_edit_tweet_api_enabled":true,"graphql_is_translatable_rweb_tweet_is_translatable_enabled":true,"view_counts_everywhere_api_enabled":true,"longform_notetweets_consumption_enabled":true,"responsive_web_twitter_article_tweet_consumption_enabled":false,"tweet_awards_web_tipping_enabled":false,"freedom_of_speech_not_reach_fetch_enabled":true,"standardized_nudges_misinfo":true,"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled":true,"longform_notetweets_rich_text_read_enabled":true,"longform_notetweets_inline_media_enabled":true,"responsive_web_media_download_video_enabled":false,"responsive_web_enhance_cards_enabled":false},"queryId":"HnVOsy-Rh_0Cuq06_z9lGA"}',
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
                'x-client-transaction-id': 'opx3ieNr1FrmnPvYgOwNq+6j98pw9kNxb366VR1yVPzm1HaBn9zVh1mLiKPjUPNCz+M9bqKq8J2M0nCWyZRAlOobo/qGow',
                'x-client-uuid': 'faf98189-7894-453c-8171-f1e2ecd46d18',
                'x-csrf-token': 'fbcc7cb37bfebd1129ff157412dcb74284a674324920c4871e1d6e7596943a3905f7f91d83125f821be67dc4523028bd5eee19faab0946a8f5081d0ca8bd28183d453c779d1996250764ba408d97f2cb',
                'x-twitter-active-user': 'yes',
                'x-twitter-auth-type': 'OAuth2Session',
                'x-twitter-client-language': 'en',
                cookie: '_ga=GA1.2.1365282684.1687360263; lang=en; _gid=GA1.2.732230848.1695918525; guest_id=v1%3A169605847587288806; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCH%252BH9uSKAToMY3NyZl9p%250AZCIlNDAyYjk4MjMzZmRhZDM2NjY4M2FlOTBmM2MzZWY5YmY6B2lkIiVjZTk4%250AYmEyNmExOTIxMDQwY2U4ZDE2YmNiODJmMDYyNQ%253D%253D--7e2fece09a8cbfbd2c2bf577a2e41254cef4d78a; g_state={"i_l":0}; kdt=s8nhGUxRSUWN7qorYHMaBTtNSciC5YNeQkCeJksr; auth_token=6627d4e5ac8711b838ddac61190fa035f206f052; ct0=fbcc7cb37bfebd1129ff157412dcb74284a674324920c4871e1d6e7596943a3905f7f91d83125f821be67dc4523028bd5eee19faab0946a8f5081d0ca8bd28183d453c779d1996250764ba408d97f2cb; guest_id_ads=v1%3A169605847587288806; guest_id_marketing=v1%3A169605847587288806; twid=u%3D17097185; external_referer=padhuUp37zjgzgv1mFWxJ12Ozwit7owX|0|8e8t2xd8A2w%3D; personalization_id="v1_dMUx6E3YyQ4UhdvY7mOagg=="',
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
