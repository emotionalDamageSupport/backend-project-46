const getParser = (ext) => {
  const parsers = {
    '.json': JSON.parse,
  };

  return parsers[ext];
};

export default getParser;
