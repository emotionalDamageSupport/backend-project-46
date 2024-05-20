const json = (diffs) => {
  const formattedDiff = diffs.map((diff) => {
    if (diff.type === 'added') {
      return `  + ${diff.key}: ${diff.value}`;
    }
    if (diff.type === 'removed') {
      return `  - ${diff.key}: ${diff.value}`;
    }
    if (diff.type === 'changed') {
      return `  - ${diff.key}: ${diff.oldValue}\n  + ${diff.key}: ${diff.newValue}`;
    }
    return `    ${diff.key}: ${diff.value}`;
  });

  return `{\n${formattedDiff.join('\n')}\n}`;
};

const formatters = {
  json,
};

export default (diff, format) => {
  const formatData = formatters[format];
  const formattedData = formatData(diff);
  console.log(formattedData);
  return formattedData;
};
