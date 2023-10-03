const getSearch = require('./test');

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

module.exports = (router) => {
    router.get('/keyword/:keyword/:routeParams?', keyword);
};
