import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const answerPlainJson = readFileSync(path.resolve(__dirname, '__fixtures__/plainJson.txt'), 'utf-8');

test('works', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(answerPlainJson);
});
