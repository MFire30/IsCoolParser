const https = require ('../Grabber/htmlGrabber');
const htmlGrabber = require('../Grabber/htmlGrabber');
const regexReader = require ('./customReaders/discipline');

const classBuilder = require('../Builders/classBuilder');
const headerBuilder = require('../Builders/headerBuilder');

exports.getDiscipline = (url) => {
  return https.getHtmlFromHttps(url,  (response) => {
    let discipline = {};
    let classBlocksArray = [];

    classBlockArray = regexReader.classBlock(response);

    discipline.header = headerBuilder.buildHeader(response);
    discipline.classes = interateClasses(classBlockArray);

    console.log(JSON.stringify(discipline));
    return discipline;
  });
}

const interateClasses = (blockArray) => {
  let classes = [];

  for(let counter = 0; counter < blockArray.length; counter++){
    classes[counter] = classBuilder.buildClass(blockArray[counter]);
  }

  return classes;
}
