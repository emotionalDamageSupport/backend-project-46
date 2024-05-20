import { readFileSync } from 'fs';
import path from 'path';

export const readFile = (file) => readFileSync(path.resolve(process.cwd(), './__tests__/__fixtures__', file), 'utf-8');
export const getExt = (file) => path.extname(file);
