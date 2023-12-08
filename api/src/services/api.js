import chalk from 'chalk';
import cors from 'cors';
import express from 'express';
import { glob } from 'glob';

const api = express();

api.use(cors());
api.use(express.json());
api.use('/public', express.static('./public'));

// json required
api.use((err, req, res, next) => {
    console.log(err);
    if (err instanceof SyntaxError) {
        return res
            .status(400)
            .send({
                message: 'Invalid JSON received'
            })
    }

    next();
});

export const register_routes = async () => {
    // register routes
    let files = await glob('/opt/src/api/src/controllers/**/*.js');

    for (const file of files) {
        console.log('here', file)
        let controller = (await import(`${file}`)).default;

        for (const [route, handler] of Object.entries(controller.routes)) {
            let [method, path] = route.split(' ');

            let middleware = [];

            for (const [action, mw] of Object.entries(controller.middleware)) {
                if (action === '*' || action === handler) {
                    middleware = mw;
                }
            }

            if (!controller[handler]) {
                console.log(`cannot bind to ${file}::${handler}, skipping`);
                continue;
            }

            api[method](path, ...middleware.concat(controller[handler]));
        }
    }
};

export const start_server = async () => {
    api.listen(3000, () => {
        console.log(`my application`)
        console.log(` - environment: ${chalk.magenta(process.env.APPENV)}`)
        console.log(` - api url: ${chalk.magenta(process.env.BASE_API_URL)}`);
        console.log(` - ui url: ${chalk.magenta(process.env.BASE_UI_URL)}`);
    });
};

export default api;
