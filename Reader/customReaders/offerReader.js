const regexList = require('../../Resources/regexDisciplineList');
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

exports.departmentName = (htmlData) => {
	const result = regexReader.interateRegex(regexList.offerDeptoName, htmlData, null);

  if (result && result.length > 0){
    return result[0].trim();
  } else {
    console.error('OfferReader department name: Match does not meet requirements!');
    return null;
  }
}
