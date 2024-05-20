#!/usr/bin/env node

import { Command } from 'commander';

import genDiff from '../src/index.js';

const program = new Command('gendiff');

program
  .description('Compares two configuration files and shows a difference.')
  .usage('gendiff [options] <filepath1> <filepath2>')
  .version('0.0.1', '-V --version', 'output the version number')
  .option('-f --format', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((file1, file2) => {
    genDiff(file1, file2);
  });

program.parse(process.argv);

export default program;
