import http from 'http';


let port = 5279;
let requestHandler = (request, response) => {
    console.log(request.url);
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    response.write(`Я веб-сервер, работаю на порту ${port}!`);
    response.end();
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('Ой, произошло что-то ужасное!', err);
    }
    console.log(`Я простой веб-сервер, работаю на порту ${port}`);
});