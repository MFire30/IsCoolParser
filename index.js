const mainPageReader = require('./Reader/mainPageReader');
const disciplineReader = require('./Reader/disciplineReader');
const specificUrl = 'https://matriculaweb.unb.br/graduacao/oferta_dados.aspx?cod=158267&dep=422';


mainPageReader.getDisciplines();
disciplineReader.getDiscipline(specificUrl);
