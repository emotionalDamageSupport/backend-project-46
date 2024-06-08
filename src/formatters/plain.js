import _ from 'lodash';

const formatValue = (v) => {
  if (_.isObject(v)) {
    return '[complex value]';
  }
  if (typeof v === 'string') {
    return `'${v}'`;
  }
  return v;
};

const getKeyName = (key, ancestor) => {
  if (ancestor === '') {
    return `${key}`;
  }
  return `${ancestor}.${key}`;
};

const plain = (diffs, ancestor = '') => {
  const formattedDiff = diffs
    .filter((diff) => diff.type !== 'unchanged')
    .map((diff) => {
      switch (diff.type) {
        case 'added':
          return `Property '${getKeyName(diff.key, ancestor)}' was added with value: ${formatValue(diff.value)}`;
        case 'changed':
          return `Property '${getKeyName(diff.key, ancestor)}' was updated. From ${formatValue(diff.oldValue)} to ${formatValue(diff.newValue)}`;
        case 'nested':
          return plain(diff.children, getKeyName(diff.key, ancestor));
        default:
          return `Property '${getKeyName(diff.key, ancestor)}' was removed`;
      }
    });

  return `${formattedDiff.join('\n')}`;
};

export default plain;
