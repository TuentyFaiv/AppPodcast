const routes = module.exports = require('next-routes')();

routes
.add('index')
.add('channel', '/:slug.:id', 'channel')
.add('podcasts', '/:slugChannel.:idChannel/:slug.:id', 'podcasts')