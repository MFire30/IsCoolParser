const urls = require('../Resources/urlResources');
const http = require ('../Grabber/htmlGrabber');
const htmlGrabber = require('../Grabber/htmlGrabber');
const classBlock = require('../Resources/regexDisciplineResources');
const regexList = require('../Resources/regexResources');
const regexReader = require ('./regexReader')


exports.getDiscipline = (url) => {

  return http.getHtmlFromHttps('https://www.matriculaweb.unb.br/graduacao/oferta_dados.aspx?cod=113042&dep=650',  (response) => {
    console.log('Pegando página de c2 facil');
    //console.log(response);

    var htmlBody = '';
    var discipline = {};
    var classArray = [];
    var headerArray = [];

    classArray = regexReader.disciplineClassBlock (response);
    console.log(classArray.length);
    console.log('DEUS EH TOP');

    headerArray = regexReader.disciplineHeaderBlock (response);


    console.log('pega o bloco');
    console.log(headerArray);
  });

}
