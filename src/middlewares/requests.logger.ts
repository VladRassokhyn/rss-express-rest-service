import { NextFunction, Request, Response } from 'express';
import { pipeline } from 'stream';
import * as fs from 'fs';
import * as path from 'path';

export const requestLogger = async (req: Request, res: Response, next: NextFunction) => {
  await pipeline(
    (`Req URL: ${req.url} \n 
    Req body: ${JSON.stringify(req.body) || 'no body'} \n 
    Req params: ${JSON.stringify(req.params) || 'no params'}\n 
    Res code ${res.statusCode} \n \n \n`),
    fs.createWriteStream(path.join(__dirname, '../../logs/request.txt'), {flags: 'a'}),
    (err) => {
      if (err) {
        process.stderr.write(err.message);
        process.exit(1);
      }
    }
  )
  next();
}