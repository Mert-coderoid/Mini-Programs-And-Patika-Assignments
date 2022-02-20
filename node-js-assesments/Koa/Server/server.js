// create server with http module
const http = require("http");

const server = http.createServer((req, res) => {
    
    // set response header
    res.writeHead(200, { "Content-Type": "text/html" });


    // listen /index route
    if (req.url === "/index") {
        res.write("<h2>Welcome to the index page</h2>");
    }

    // listen /about route
    else if (req.url === "/contact") {
        res.write("<h2>Welcome to the contact page</h2>");
    }

    // listen other routes
    else {
        res.write("<h2>404 Page not found</h2>");
    }

    // end response
    res.end();
})

const port = 5000;

// listen on port 3000
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
}
);