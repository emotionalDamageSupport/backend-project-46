import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const answerPlain = readFileSync(path.resolve(__dirname, '__fixtures__/plainResult.txt'), 'utf-8');

test('json', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(answerPlain);
});

test('yaml', () => {
  expect(genDiff('file1.yaml', 'file2.yaml')).toEqual(answerPlain);
});
