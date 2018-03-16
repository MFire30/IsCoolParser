const regexList = require('../Resources/regexDisciplineList');
const disciplineInterators = require('./customRegexInterators/disciplineInterators');

// This function interates over a text using a given regex
exports.interateRegex = (regex_text, text, customStrategy) => {
	var match = {};
  var result = [];
	var interatorStrategy = customStrategy;

	// TODO: Regex Text validation

	// The condition checks if was given a regex interator custom strategy
	if(interatorStrategy == null){
		interatorStrategy = exports.defaultRegexInterator;
	} else {
		// Nothing to do
	}

  // If exists a match, it will get it, parse it, and push it to the array
	while (match = regex_text.exec(text)){
		const newData = interatorStrategy(match);
		result.push(newData);
	};
	// Returns the array that was build in the loop above
	return result;
}

// This is the basic regex interator for most cases.
// This function takes a regex match and returns the first group ([1]).
exports.defaultRegexInterator = (match) => {
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

// This is the basic regex interator for arrays that contains blocks of info.
exports.interateArrayRegex = (regexText, textArray, customStrategy) => {
	let result = [];
	
	for(let counter = 0; counter < textArray.length; counter++){
		result[counter] = exports.interateRegex(regexText, textArray[counter], customStrategy);
	}

	return result;
}
