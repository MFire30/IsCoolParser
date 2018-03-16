const mainPageReader = require('./Reader/mainPageReader');
const disciplineReader = require('./Reader/disciplineReader');

// Gets all the first page data -> FGA MW
exports.getOfferFrom = (url) => {
  mainPageReader.getOffer(url);
}

// Gets any specifc discipline from MW
exports.getSpecific = async (url) => {
  return disciplineReader.getDiscipline(url);
}
