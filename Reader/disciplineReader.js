const https = require ('../Grabber/htmlGrabber');
const htmlGrabber = require('../Grabber/htmlGrabber');
const regexReader = require ('./customReaders/discipline');

const classBuilder = require('./classBuilder');
const headerBuilder = require('./headerBuilder');

exports.getDiscipline = (url) => {
  return https.getHtmlFromHttps(url,  (response) => {
    let discipline = {};
    let classBlocksArray = [];

    classBlockArray = regexReader.classBlock(response);

    discipline.header = headerBuilder.buildHeader(response);
    discipline.classes = classBuilder.buildClass(classBlockArray[0]);

    console.log(JSON.stringify(discipline));
    return discipline;
  });

}
