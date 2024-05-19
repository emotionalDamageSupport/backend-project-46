import { readFileSync } from 'fs';
import path from 'path';

export const readFile = (file) => readFileSync(path.resolve(process.cwd(), file), 'utf-8');
export const getExt = (file) => path.extname(file);
