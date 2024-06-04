import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const json1Path = path.resolve(__dirname, '__fixtures__/file1.json');
const json2Path = path.resolve(__dirname, '__fixtures__/file2.json');

const yaml1Path = path.resolve(__dirname, '__fixtures__/file1.yaml');
const yaml2Path = path.resolve(__dirname, '__fixtures__/file2.yaml');

const answer = readFileSync(path.resolve(__dirname, '__fixtures__/result.txt'), 'utf-8');

const plain = readFileSync(path.resolve(__dirname, '__fixtures__/plain.txt'), 'utf-8');

const jsonAnswer = readFileSync(path.resolve(__dirname, '__fixtures__/json.txt'), 'utf-8');

test('json', () => {
  expect(genDiff(json1Path, json2Path)).toEqual(answer);
});

test('yaml', () => {
  expect(genDiff(yaml1Path, yaml2Path)).toEqual(answer);
});

test('plain', () => {
  expect(genDiff(json1Path, json2Path, 'plain')).toEqual(plain);
});

test('json format', () => {
  expect(genDiff(json1Path, json2Path, 'json')).toEqual(jsonAnswer);
});
