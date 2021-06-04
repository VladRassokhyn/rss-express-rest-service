import * as fs from 'fs';
import * as path from 'path';

export const uncaughtExceptionLogger = async (err: Error, origin: any) => {
  fs.appendFileSync(
    path.join(__dirname, '../../logs/uncaughtExceptions.txt'),
    `\nCaught exception: ${err}\nException origin: ${origin}`
  );
  process.stderr.write(`${err.message} \n`);
  process.exit(1);
}