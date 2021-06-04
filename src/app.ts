import express, { Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import { router as userRouter } from './resources/users/user.router';
import { router as boardRouter } from './resources/boards/board.router';
import { router as taskRouter } from './resources/tasks/task.router';
import { requestsLogger } from './middlewares/requests.logger';
import { unhandledErrorHandler } from './middlewares/unhandledErrors.logger';
import { uncaughtExceptionLogger } from './middlewares/uncaughtException.logger';
import { unhandledRejectionLogger } from './middlewares/unhandledRejection.logger';

export const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(requestsLogger);
app.use(unhandledErrorHandler);

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.url === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter, taskRouter);

process.on('uncaughtException', uncaughtExceptionLogger);
process.on('unhandledRejection', unhandledRejectionLogger);
