import _ from 'lodash';

const getSpaces = (spacesCount) => '    '.repeat(spacesCount);

const getString = (value, spaces) => {
  if (!_.isObject(value)) {
    return value;
  }
  const strings = Object.keys(value).map((v) => `${getSpaces(spaces)}    ${v}: ${getString(value[v], spaces + 1)}`);
  const inner = strings.join('\n');
  return `{\n${inner}\n${getSpaces(spaces)}}`;
};

const stylish = (diffs, spaces = 0) => {
  const formattedDiff = diffs.map((diff) => {
    const formatLine = (character, value) => `${getSpaces(spaces)}  ${character} ${diff.key}: ${getString(value, spaces + 1)}`;
    if (diff.type === 'added') {
      return formatLine('+', diff.value);
    }
    if (diff.type === 'removed') {
      return formatLine('-', diff.value);
    }
    if (diff.type === 'changed') {
      return `${getSpaces(spaces)}  - ${diff.key}: ${getString(diff.oldValue, spaces + 1)}\n ${getSpaces(spaces)} + ${diff.key}: ${getString(diff.newValue, spaces + 1)}`;
    }
    if (diff.type === 'nested') {
      return `${getSpaces(spaces + 1)}${diff.key}: ${stylish(diff.children, spaces + 1)}`;
    }
    return `${getSpaces(spaces)}    ${diff.key}: ${diff.value}`;
  });

  return `{\n${formattedDiff.join('\n')}\n${getSpaces(spaces)}}`;
};

export default stylish;
