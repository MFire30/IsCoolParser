const regexListDiscipline = require('../../Resources/regexDisciplineInfo');
const disciplineInterators = require('../customRegexInterators/disciplineInterators');
// const regexDicipline = require('../../Resources/regexDisciplineResources');

const regexReader = require('../regexReader');

exports.classBlock = (htmlData) => {
  return regexReader.interateRegex(regexListDiscipline.singleClassBlock, htmlData, null);
}

exports.classBasicInfo = (htmlData) => {
  return regexReader.interateRegex(regexListDiscipline.classBasicInfo, htmlData, null);
}

exports.classAvailability = (htmlData) => {
  return regexReader.interateRegex(regexListDiscipline.classAvailability, htmlData, null);
}

exports.classSchedule = (htmlData) => {
  return regexReader.interateRegex(regexListDiscipline.classSchedule, htmlData, null);
}

exports.classPossibleProfessorBlock = (htmlData) => {
  return regexReader.interateRegex(regexListDiscipline.classPossibleProfessorBlock, htmlData, null);
}

exports.classProfessor = (htmlData) => {
  return regexReader.interateRegex(regexListDiscipline.classProfessor, htmlData, null);
}
