const urls = require('../Resources/urlResources');
const http = require ('../Grabber/htmlGrabber');


exports.getDiscipline = (url, callback) => {

  return http.getHtmlFromHttps('https://www.matriculaweb.unb.br/graduacao/oferta_dados.aspx?cod=208582&dep=650',  (htmlBody) => {
    console.log('Pegando página de acustica');
    console.log(htmlBody);

  });

  response.on('data', (data) => {
    // Since the data is loaded as a NodeJS Buffer, use toString()
    // And, since data.toString() will result in a error, use
    // string concatenation.
    htmlBody += data;
  });

  // On the end of the async function, return htmlBody as callback
  response.on('end', () => {
    console.log('htmlGrabber.getHtmlFromHttps: Here\'s the response');
    callback(htmlBody);
  })

}
