const mainPageReader = require('./Reader/mainPageReader');
const disciplineReader = require('./Reader/disciplineReader');

// Gets all the first page data -> FGA MW
exports.getAllDisciplines = () => {
  mainPageReader.getDisciplines();
}

// Gets any specifc discipline from MW
exports.getSpecific = async (url) => {
  return await disciplineReader.getDiscipline(url);
}

// Uses the functions
exports.getSpecific('https://matriculaweb.unb.br/graduacao/oferta_dados.aspx?cod=113042&dep=650');
exports.getSpecific('https://matriculaweb.unb.br/graduacao/oferta_dados.aspx?cod=120642&dep=650');
