const regexList = require('../../Resources/regexDisciplineList');
const regexDicipline = require('../../Resources/regexDisciplineResources');
const disciplineInterators = require('../customRegexInterators/disciplineInterators');

const regexReader = require('../regexReader');

// This regex function returns the actual discipline count
exports.disciplineCount = (htmlData) => {
	// console.log("disciplineCount", htmlData);
  return regexReader.interateRegex(regexList.disciplineCount, htmlData, null);
}

// This regex is responsible for getting each class "block"
exports.disciplineBlocks = (htmlData) => {
  return regexReader.interateRegex(regexList.disciplineRawBlock, htmlData, null);
}

exports.disciplineInfos = (htmlData) => {
	return regexReader.interateArrayRegex(regexList.disciplineInfo, htmlData,
		disciplineInterators.basicDisciplineInfoInterator);
}
