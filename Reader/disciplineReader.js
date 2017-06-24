const http = require ('../Grabber/htmlGrabber');
const htmlGrabber = require('../Grabber/htmlGrabber');
const regexReader = require ('./regexReader')

exports.getDiscipline = (url) => {

  return http.getHtmlFromHttps(url,  (response) => {
    var discipline = {};
    var classBlocksArray = [];

    classBlockArray = regexReader.disciplineClassBlock (response);
    discipline.header = regexReader.disciplineHeader (response);
    discipline.classes = regexReader.disciplineClass (classBlockArray);

    console.log('\nJSON for ' + discipline.header[0].name + '\n');
    console.log(JSON.stringify(discipline));
    console.log('\n');
  });

}
