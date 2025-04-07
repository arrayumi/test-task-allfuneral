const snakeCaseToText = (snakeCase) => {
  const regex = /_/g;
  const result = snakeCase.charAt(0).toUpperCase() + snakeCase.slice(1);
  return result.replace(regex, " ");
};

export default snakeCaseToText;
