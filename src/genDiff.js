import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));

  return keys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }

    if (!_.has(data2, key)) {
      return { key, type: 'removed', value: data1[key] };
    }

    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, type: 'nested', children: genDiff(data1[key], data2[key]) };
    }

    if (typeof data1[key] !== typeof data2[key] || data1[key] !== data2[key]) {
      return {
        key, type: 'changed', oldValue: data1[key], newValue: data2[key],
      };
    }

    return { key, type: 'unchanged', value: data1[key] };
  }).sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
    return 0;
  });
};

export default genDiff;
