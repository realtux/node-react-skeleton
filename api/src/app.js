import { register_models } from '#api/models/system/collection.js';
import { register_routes, start_server } from '#api/services/api.js';
import axios from 'axios';

axios.defaults.validateStatus = () => true;

// initialize database:
await register_models();

// initialize api
await register_routes();
await start_server();

process.on('uncaughtException', err => {
    console.log(err);
});
