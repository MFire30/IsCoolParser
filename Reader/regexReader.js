const regexList = require('../Resources/regexResources');
const regexDicipline = require('../Resources/regexDisciplineResources');

// This function interates over a text using a given regex
var interate_regex = (regex_text, text) => {
	var match = {};
  var result = [];

  // If exists a match, it will get it and push it to the array
	while (match = regex_text.exec(text)){
		result.push(match[1]);
	};

	return result;
}

// This regex function returns the actual discipline count
exports.disciplineCount = (htmlData) => {
  return interate_regex(regexList.disciplineCount, htmlData);
}

// This regex is responsible for getting each class "block"
exports.disciplineBlocks = (htmlData) => {
  return interate_regex(regexList.disciplineBlock, htmlData);
}

// This regex is responsible for getting each class name
exports.disciplineNames = (htmlData) => {
  return interate_regex(regexList.disciplineNames, htmlData);
}

// This regex is responsible for getting each class url to future use (HTTP GET that data)
exports.disciplineUrls = (htmlData) => {
  return interate_regex(regexList.disciplineUrl, htmlData);
}

//This regex is responsible for getting all class codes
exports.disciplineCodes = (htmlData) => {
  return interate_regex(regexList.disciplineCode, htmlData);
}

exports.disciplineClassBlock = (htmlData) => {
  return interate_regex(regexDicipline.classBlock, htmlData);
}

exports.disciplineHeaderBlock = (htmlData) => {
	return interate_regex(regexDicipline.headerBlock, htmlData);
}
