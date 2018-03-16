const regexReader = require('./regexReader');
const regexDisciplineHeader = require('../Resources/regexDisciplineHeader');

exports.buildHeader = (htmlData) => {
  let header = {};

  if(htmlData){
    header.depto = regexReader.interateRegex(regexDisciplineHeader.disciplineDepto,
      htmlData, buildHeaderDepto);
    header.cod = regexReader.interateRegex(regexDisciplineHeader.disciplineCode,
      htmlData, null);
    header.aboutLink = regexReader.interateRegex(regexDisciplineHeader.aboutLink,
      htmlData, null);
    header.credits = regexReader.interateRegex(regexDisciplineHeader.disciplineCredits,
      htmlData, buildHeaderCredits);
  } else {
    // Do nothing
  }

  return header;
}

const buildHeaderDepto = (match) => {
  let result = {};

  if(match && match.length === 4){
    result.link = match[1];
    result.name = match[2].trim();
    result.abreviation = match[3].trim();
  } else {
    console.warn('Build header depto: Failed to meet match specification!');
  }

  return result;
}

const buildHeaderCredits = (match) => {
  let result = {};

  if(match && match.length === 5){
    // Format in order: Teor-Prat-Ext-Est
    result.teor = match[1];
    result.prat = match[2];
    result.ext = match[3];
    result.est = match[4];
  } else {
    console.warn('Build header credits: Failed to meet match specification!');
  }

  return result;
}
