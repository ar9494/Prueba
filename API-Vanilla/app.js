const http = require("http");
const PORT = 3000;

const server = http.createServer(async (req, res) => {
    if (req.url === "/getTime" && req.method === "GET") {
        const time = new Date();
        const hours = ("0" + time.getHours()).slice(-2);
        const minutes = ("0" + time.getMinutes()).slice(-2);
        const seconds = ("0" + time.getSeconds()).slice(-2);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(`${hours}:${minutes}:${seconds}`);
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end("No se ha encontrado la ruta");
    }
});

server.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});