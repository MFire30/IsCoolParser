const mainPageReader = require('./Reader/mainPageReader');
const html = require('./Grabber/htmlGrabber');
const disciplineReader = require('./Reader/disciplineReader');

mainPageReader.getDisciplines();

disciplineReader.getDiscipline();
