const regexReader = require('../regexReader');
const regexListClass = require('../../Resources/regexClassResources');

// This function is an strategy for regexInterator, customized for headerBlocks
exports.headerInterator = (match) => {
  // Checking if is a valid object
  const neededSize = 10;
  const notNull = match != null;
  const enoughLength = (match.length >= neededSize);

  let result = {};

  // Creates the object or creates nothing (already clean)
  if(notNull && enoughLength) {
    result.departmentURL = match[1];
    result.departmentName = match[2];
    result.code = match[4];
    result.name = match[6];
    result.creditsInfo = match[8];
    result.campus = match[10];
  } else {
    // Nothing to do
  }

  return result;
}

// This function is an strategy for regexInterator, customized for headerBlocks
exports.classInterator = (match) => {
  const neededSize = 10;
  const notNull = match != null;
  const enoughLength = (match.length >= neededSize);

  let result = {};

  // Creates the object or creates nothing (already clean)
  if(notNull && enoughLength) {
    // In this type of regex match, blocks to-be regex will exist.
    // So, they nedeed to be parsed in the future.
    const blockRawAvailability= match[4];
    const blockRawClassDayTimes = match[8];
    const blockRawProfessors = match[10];


    // Mounts the object
    result.classTurma = match[2];
    result.availability = regexReader.reader(regexListClass.classAvailability,
      blockRawProfessors, null);
    result.dayPeriod = match[6];
    result.classDayTimes = regexReader.reader(regexListClass.classDayTimes,
      blockRawProfessors, null);
    result.professors = regexReader.reader(regexListClass.professorNames,
      blockRawProfessors, null);
  } else {
    // Nothing to do
  }

  return result;
}
