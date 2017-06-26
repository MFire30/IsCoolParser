const mainPageReader = require('./Reader/mainPageReader');
const disciplineReader = require('./Reader/disciplineReader');
const specificUrl = 'https://matriculaweb.unb.br/graduacao/oferta_dados.aspx?cod=203882&dep=650';

// Gets all the first page data -> FGA MW
exports.getAllDisciplines = () => {
  mainPageReader.getDisciplines();
}

// Gets any specifc discipline from MW
exports.getSpecific = (url) => {
  disciplineReader.getDiscipline(url);
}

// Uses the functions
exports.getAllDisciplines();
exports.getSpecific(specificUrl);
