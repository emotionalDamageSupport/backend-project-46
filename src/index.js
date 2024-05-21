import { readFile, getExt } from './utils.js';
import getParser from './parsers.js';
import genDiff from './genDiff.js';
import getFormatter from './formatters/formatters.js';

export default (file1, file2, format = 'stylish') => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);

  const parse1 = getParser(getExt(file1));
  const parse2 = getParser(getExt(file2));

  const firstParsed = parse1(data1);
  const secondParsed = parse2(data2);

  const diff = genDiff(firstParsed, secondParsed);

  console.log({ format });

  const formatData = getFormatter(format);

  console.log(formatData);

  const formattedData = formatData(diff);
  console.log(formattedData);
  return formattedData;
};
