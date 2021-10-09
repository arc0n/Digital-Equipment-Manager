exports.generateRandomDynamicId = () => {
  return Array.from(Array(15), () => Math.floor(Math.random() * 36).toString(36)).join('');
};