const regexReader = require('../Reader/regexReader');
const htmlGrabber = require('../Grabber/htmlGrabber');
const urls = require('../Resources/urlResources');

/* This function is responsible for getting all the basic disciplines data from
 * the main MW FGA page and returning it as a object
 */
exports.getDisciplines = () => {
  console.log('mainPageReader.getDisciplines: Trying to acess main page...');

  // Gets the HTML from HTTPS and manipulate the data after response 'htmlBody'
  htmlGrabber.getHtmlFromHttps(urls.mwFga, (htmlBody) => {
    console.log('mainPageReader.getDisciplines: Ok, got response. Now, using regexReader...');

    // Here, each important data is parsed and exported for future use
    exports.disciplineCount = regexReader.disciplineCount(htmlBody);
    exports.disciplineBlocks = regexReader.disciplineBlocks(htmlBody);
    exports.disciplineNames = regexReader.disciplineNames(exports.disciplineBlocks);
    exports.disciplineCodes = regexReader.disciplineCodes(exports.disciplineBlocks);
    exports.disciplineUrls = regexReader.disciplineUrls(exports.disciplineBlocks);

    console.log('mainPageReader.getDisciplines: Ok, regex done.  Function finished.');
  });
}
