const textToSnakeCase = (text) => {
  const lowerWords = text.split(" ").map((word) => word.toLowerCase());
  return lowerWords.join("_");
};

export default textToSnakeCase;
