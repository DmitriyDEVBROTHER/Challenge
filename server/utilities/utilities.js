// function for check string
const tryParseInt = (str, defaultValue) => (new Boolean(str)) ? parseFloat(str) : defaultValue;

export { tryParseInt };