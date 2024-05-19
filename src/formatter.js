export default (diffs) => {
  const formattedDiff = diffs.map((diff) => {
    if (diff.type === 'added') {
      return ` + ${diff.key}: ${diff.value}`;
    }
    if (diff.type === 'removed') {
      return ` - ${diff.key}: ${diff.value}`;
    }
    if (diff.type === 'changed') {
      return ` - ${diff.key}: ${diff.oldValue}\n + ${diff.key}: ${diff.newValue}`;
    }
    if (diff.type === 'unchanged') {
      return `   ${diff.key}: ${diff.value}`;
    }
    return '';
  });

  return `{\n${formattedDiff.join(' \n')} \n}`;
};
