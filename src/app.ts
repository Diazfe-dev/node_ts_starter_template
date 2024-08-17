import { envs } from './config/envs';
import { Server } from './presentation/server';
import { AppRoutes } from './presentation/routes';
(async () => {
    await bootstrap();
})();

async function bootstrap() {
    const server = new Server({
        port: envs.port,
        routes: AppRoutes.routes
    })
    server.run();
}