const next = require('next');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const port = parseInt(process.env.PORT, 10) || 3010;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const express = require("express");
const compression = require('compression');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();
    server.use(cookieParser());
    server.use(compression());
    server.use(handler);

    server.get('*', (req, res) => {
        return handle(req, res);

    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`)
    })
});
