import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const answer = readFileSync(path.resolve(__dirname, '__fixtures__/result.txt'), 'utf-8');

const plain = readFileSync(path.resolve(__dirname, '__fixtures__/plain.txt'), 'utf-8');

const jsonAnswer = readFileSync(path.resolve(__dirname, '__fixtures__/json.txt'), 'utf-8');

test('json', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(answer);
});

test('yaml', () => {
  expect(genDiff('file1.yaml', 'file2.yaml')).toEqual(answer);
});

test('plain', () => {
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(plain);
});

test('json format', () => {
  expect(genDiff('file1.json', 'file2.json', 'json')).toEqual(jsonAnswer);
});
