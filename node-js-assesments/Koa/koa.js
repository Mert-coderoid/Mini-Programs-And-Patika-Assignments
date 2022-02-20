// import koa
const Koa = require('koa');
// import koa-router
const Router = require('koa-router');

// create koa app
const app = new Koa();
// create koa router
const router = new Router();

// set header send html content type
app.use(async (ctx, next) => {
    ctx.set('Content-Type', 'text/html');
    await next();
});

// create a route
router.get('/', (ctx) => {
    ctx.body = '<h1>Hello World</h1>';
    }
);

// create anoter route
router.get('/about', (ctx) => {
    ctx.body = '<h1>About Page</h1>';
    }
);

// create anoter route
router.get('/contact', (ctx) => {
    ctx.body = '<h1>Contact Page</h1>';
    }
);


// add router to koa app
app.use(router.routes());

// start server
app.listen(3000);
console.log('Server started on port 3000');

// run: node koa.js
// open: http://localhost:3000
