const mainPageReader = require('./Reader/mainPageReader');
const disciplineReader = require('./Reader/disciplineReader');

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
