const offerReader = require('../Reader/customReaders/offerReader');
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
    exports.disciplineCount = offerReader.disciplineCount(htmlBody);
    exports.disciplineBlocks = offerReader.disciplineBlocks(htmlBody);
    exports.disciplineInfos = offerReader.disciplineInfos(exports.disciplineBlocks);

    console.log('mainPageReader.getDisciplines: Ok, regex done.  Function finished.');

    // For demonstrations reasons, here's the data that was got
    console.log('\nmainPageReader.getDisciplines: Showing the data...');
    console.log('Discipline count for FGA:');
    console.log(JSON.stringify(exports.disciplineCount));
    console.log('\nDiscipline names for FGA:');
    console.log(JSON.stringify(exports.disciplineBlocks.length));
    console.log('\nDiscipline names for FGA:');
    console.log(JSON.stringify(exports.disciplineInfos.length));
  });
}
