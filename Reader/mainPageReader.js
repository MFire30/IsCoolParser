const offerReader = require('../Reader/customReaders/offerReader');
const htmlGrabber = require('../Grabber/htmlGrabber');
const urls = require('../Resources/urlResources');

/* This function is responsible for getting all the basic disciplines data from
 * the main MW offer page and returning it as a object
 */
exports.getOffer = (url) => {
  console.log('mainPageReader.getOffer: Trying to acess main page...');

  // Gets the HTML from HTTPS and manipulate the data after response 'htmlBody'
  htmlGrabber.getHtmlFromHttps(url, (htmlBody) => {
    console.log('mainPageReader.getOffer: Ok, got response. Now, using regexReader...');
    let offer = {};

    const disciplineBlocks = offerReader.disciplineBlocks(htmlBody);

    offer.count = offerReader.disciplineCount(htmlBody);
    offer.department = offerReader.departmentName(htmlBody);
    offer.disciplines = offerReader.disciplineInfos(disciplineBlocks);

    console.log('mainPageReader.getOffer: Ok, regex done.  Function finished.');

    // For demonstrations reasons, here's the data that was got
    console.log('\nmainPageReader.getOffer: Showing the data...');
    console.log('Discipline count for ', offer.department);
    console.log(JSON.stringify(offer.count));
    console.log('\nDiscipline info');
    console.log(JSON.stringify(offer.disciplines));
  });
}
