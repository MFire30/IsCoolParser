const regexReader = require('./regexReader');
const regexDisciplineInfo = require('../Resources/regexDisciplineInfo');

exports.buildClass = (classHtmlMatch) => {
  let result = {};

  result.class = regexReader.interateRegex(regexDisciplineInfo.classBasicInfo,
    classHtmlMatch, exports.buildClassInfo);
  result.availability = regexReader.interateRegex(regexDisciplineInfo.classAvailability,
    classHtmlMatch, exports.buildClassAvailability);
  result.scheduling = regexReader.interateRegex(regexDisciplineInfo.classSchedule,
    classHtmlMatch, exports.buildClassSchedule);

  const possibleProfessors = regexReader.interateRegex(regexDisciplineInfo.classPossibleProfessorBlock,
    classHtmlMatch, null);
  result.professors = regexReader.interateArrayRegex(regexDisciplineInfo.classProfessor,
    reduceProfessorBlock(possibleProfessors), null);

  // console.log('possibleProfs', JSON.stringify(possibleProfessors));
  // console.log('reduced', JSON.stringify(reduceProfessorBlock(possibleProfessors)));

  return result;
}

exports.buildClassInfo = (classInfoMatch) => {
  let result = {};

  if(classInfoMatch && classInfoMatch.length === 3){
    result.designation = classInfoMatch[1];
    result.responsible = classInfoMatch[2];
  } else {
    console.warn('Build class info: Failed to meet match specification!');
  }

  return result;
}

exports.buildClassAvailability = (classInfoMatch) => {
  let result = {};

  if(classInfoMatch && classInfoMatch.length === 4){
    result.total = classInfoMatch[1];
    result.occupied = classInfoMatch[2];
    result.remaining = classInfoMatch[3];
  } else {
    console.warn('Build class availability: Failed to meet match specification!');
  }

  return result;
}

exports.buildClassSchedule = (classInfoMatch) => {
  let result = {};

  if(classInfoMatch && classInfoMatch.length === 5){
    result.weekday = classInfoMatch[1];
    result.startHour = classInfoMatch[2];
    result.endHour = classInfoMatch[3];
    result.local = classInfoMatch[4];
  } else {
    console.warn('Build class schedule: Failed to meet match specification!');
  }

  return result;
}

const reduceProfessorBlock = (blocks) => {
  const professorOffset = 3;
  let interationCount = (blocks.length % professorOffset) + 1;
  let professors = [];


  for(let counter = professorOffset - 1; interationCount > 0; counter += professorOffset){
    professors.push(blocks[counter]);
    interationCount--;
  }

  return professors;
}
