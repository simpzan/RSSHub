const { getSearch, getHomeLatest } = require('./test');

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
    const items = await getHomeLatest(ctx);
    ctx.state.data = {
        title: `Twitter Home`,
        link: 'https://twitter.com/home',
        item: items,
        allowEmpty: true,
    };
}

module.exports = (router) => {
    router.get('/keyword/:keyword/:routeParams?', keyword);
    router.get('/home', home);
};
