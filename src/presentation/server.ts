import express, { Router } from "express";


interface ServerOptions {
    port: number;
    routes: Router;
}

export class Server {
    public readonly app = express();
    private serverListener?: any;
    private readonly port: number;
    private readonly routes: Router;

    constructor(serverOptions: ServerOptions) {
        const { port, routes } = serverOptions;
        this.port = port;
        this.routes = routes;
    }

    async run() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        this.app.use(this.routes);

        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`);
        });
    }

    public stop() {
        this.serverListener?.close();
    }
}