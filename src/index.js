import { readFile, getExt } from './utils.js';
import getParser from './parsers.js';
import genDiff from './genDiff.js';
import formatter from './formatter.js';

export default (file1, file2) => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);

  const parse1 = getParser(getExt(file1));
  const parse2 = getParser(getExt(file1));

  const firstParsed = parse1(data1);
  const secondParsed = parse2(data2);
  // console.log(firstParsed);
  // console.log(secondParsed);
  console.log(genDiff(firstParsed, secondParsed, formatter));
};