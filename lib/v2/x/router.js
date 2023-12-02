const { getSearch, getHomeLatest, getHome } = require('./test');

async function keyword(ctx) {
    const keyword = ctx.params.keyword;
    const items = await getSearch(ctx);
    ctx.state.data = {
        title: `Twitter Keyword - ${keyword}`,
        link: `https://twitter.com/search?q=${encodeURIComponent(keyword)}&f=live`,
        item: items,
        allowEmpty: true,
    };
}
async function home(ctx) {
    const tab = ctx.params.tab;
    const fn = tab === 'latest' ? getHomeLatest : getHome;
    const items = await fn(ctx);
    ctx.state.data = {
        title: `Twitter Home - ${tab}`,
        link: 'https://twitter.com/home',
        item: items,
        allowEmpty: true,
    };
}

module.exports = (router) => {
    router.get('/keyword/:keyword/:routeParams?', keyword);
    router.get('/home/:tab', home);
};
