const mainPageReader = require('./Reader/mainPageReader');
const disciplineReader = require('./Reader/disciplineReader');
const specificUrl = 'https://matriculaweb.unb.br/graduacao/oferta_dados.aspx?cod=203882&dep=650';


mainPageReader.getDisciplines();
disciplineReader.getDiscipline(specificUrl);
