import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
// @ts-ignore
import userRouter from './resources/users/user.router.js';
// @ts-ignore
import boardRouter from './resources/boards/board.router.js';
// @ts-ignore
import taskRouter from './resources/tasks/task.router.js';
const app = express();
const swaggerDocument = YAML.load('../doc/api.yaml');
app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use('/users', userRouter);
app.use('/boards', boardRouter, taskRouter);
export default app;
