const Koa = require('koa')
const next = require('next')
const { parse } = require('url')
const Router = require('@koa/router')
// const fetch = require('node-fetch');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = new Koa()
        const router = new Router()

        router.get('/', async ctx => {
          await app.render(ctx.req, ctx.res, '/Main', ctx.query)
          ctx.respond = false
        })
        
        router.get('/article', async ctx => {
          console.log('ctx.query: ', ctx.query);
            await app.render(ctx.req, ctx.res, '/Article', ctx.query)
            ctx.respond = false
        })

        router.get('/feedback', async ctx => {
            await app.render(ctx.req, ctx.res, '/Feedback', ctx.query)
            ctx.respond = false
        })

        router.get('/archivelist', async ctx => {
            await app.render(ctx.req, ctx.res, '/ArchiveList', ctx.query)
            ctx.respond = false
        })

        router.get('/taglist', async ctx => {
            await app.render(ctx.req, ctx.res, '/TagList', ctx.query)
            ctx.respond = false
        })

        router.get('(.*)', async ctx => {
            const parsedUrl = parse(ctx.req.url, true)
            await handle(ctx.req, ctx.res, parsedUrl)
            ctx.respond = false
        })

        server.use(async (ctx, next) => {
            ctx.res.statusCode = 200
            await next()
        })

        server.use(router.routes())
        server.use(router.allowedMethods())
        server.listen(port, () => {
            console.log(`> Ready on http://localhost:${port}`)
        })
    })

    // process.on('unhandledRejection', error => {
    //   // Will print "unhandledRejection err is not defined"
    //   console.log('unhandledRejection', error.message);
    // });