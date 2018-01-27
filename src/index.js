const bcp47 = require('bcp-47');

module.exports = (languageTag) => {
  const schema = bcp47.parse(languageTag);
  if (schema) {
    schema.language = schema.language ? schema.language.toLowerCase() : schema.language;
    schema.region = schema.region ? schema.region.toUpperCase() : schema.region;
    schema.script = schema.script ? `${schema.script.charAt(0).toUpperCase()}${schema.script.slice(1).toLowerCase()}` : schema.script;
    schema.extendedLanguageSubtags = schema.extendedLanguageSubtags.map(a => a.toLowerCase());
    schema.variants = schema.variants.map(a => a.toLowerCase());
    schema.privateuse = schema.privateuse.map(a => a.toLowerCase());
    return bcp47.stringify(schema);
  }
  return null;
};
