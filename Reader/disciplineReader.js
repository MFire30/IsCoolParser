const urls = require('../Resources/urlResources');
const http = require ('../Grabber/htmlGrabber');
const htmlGrabber = require('../Grabber/htmlGrabber');
const classBlock = require('../Resources/regexDisciplineResources');
const regexList = require('../Resources/regexResources');
const regexReader = require ('./regexReader')

exports.getDiscipline = (url) => {

  return http.getHtmlFromHttps(url,  (response) => {
    var discipline = {};
    var classBlocksArray = [];
    var headerBlockArray = [];

    var header = [];
    var classes = [];

    classBlockArray = regexReader.disciplineClassBlock (response);
    headerBlockArray = regexReader.disciplineHeaderBlock (response);
    header = regexReader.disciplineHeader (headerBlockArray);
    classes = regexReader.disciplineClass (classBlockArray);

    console.log(classes);
  });

}
