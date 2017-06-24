const regexList = require('../Resources/regexResources');
const regexDicipline = require('../Resources/regexDisciplineResources');
const classInterators = require('./custom_regex_interators/disciplineInterators');


// This function interates over a text using a given regex
var interateRegex = (regex_text, text, customStrategy) => {
	let match = {};
  let result = [];
	let interatorStrategy = customStrategy;

	// The condition checks if was given a regex interator custom strategy
	if(customStrategy == null){
		interatorStrategy = defaultRegexInterator;
	} else {
		console.log('regexReader.interateRegex: Using custom strategy...');
		// Nothing to do
	}

  // If exists a match, it will get it, parse it, and push it to the array
	while (match = regex_text.exec(text)){
		result.push(interatorStrategy(match));
	};

	// Returns the array that was build in the loop above
	return result;
}

// This is the basic regex interator for most cases.
// This function takes a regex match and returns the first group ([1]).
var defaultRegexInterator = (match) => {
	const notNull = match != null;
	const enoughLength = ((match.length) >= 1);
	let matchResult = {};

	if(notNull && enoughLength){
		matchResult = match[1];
	} else {
		// nothing to do
	}

	return matchResult;
}


// This regex function returns the actual discipline count
exports.disciplineCount = (htmlData) => {
  return interateRegex(regexList.disciplineCount, htmlData, null);
}

// This regex is responsible for getting each class "block"
exports.disciplineBlocks = (htmlData) => {
  return interateRegex(regexList.disciplineBlock, htmlData, null);
}

// This regex is responsible for getting each class name
exports.disciplineNames = (htmlData) => {
  return interateRegex(regexList.disciplineNames, htmlData, null);
}

// This regex is responsible for getting each class url to future use (HTTP GET that data)
exports.disciplineUrls = (htmlData) => {
  return interateRegex(regexList.disciplineUrl, htmlData, null);
}

//This regex is responsible for getting all class codes
exports.disciplineCodes = (htmlData) => {
  return interateRegex(regexList.disciplineCode, htmlData, null);
}

// This is for any regex neededSize
exports.reader = (regexText, textData, interatorStrategy) => {
	return interateRegex(regexText, textData, interatorStrategy)
}

exports.disciplineClassBlock = (htmlData) => {
  return interate_regex(regexDicipline.classBlock, htmlData);
}

exports.disciplineHeaderBlock = (htmlData) => {
	return interate_regex(regexDicipline.headerBlock, htmlData);
}
