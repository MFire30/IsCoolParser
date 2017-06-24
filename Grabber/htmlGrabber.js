const https = require('https');
const urls = require('../Resources/urlResources');

/* This function is responsible for acessing an URL, via HTTPs
 * and return the raw HTML found.
*/
exports.getHtmlFromHttps = (url, callback) => {
  // The actual get for grab the HTML data
  return https.get(url, (response) => {
    const responseCode = response.statusCode;

    if(responseCode == 200) {
      console.log('htmlGrabber.getHtmlFromHttps: Got status 200!');
      console.log('htmlGrabber.getHtmlFromHttps: Getting ' + url);
    } else {
      console.warn('htmlGrabber.getHtmlFromHttps: It seems that you got another status code...');
      console.warn(responseCode);
    }

    // If there's an error on the response
    response.on('error', (errorFound) => {
      console.error('htmlGrabber.getHtmlFromHttps: Ops! Could not get the requested URL...');
      console.error('htmlGrabber.getHtmlFromHttps: See the error below:');
      console.error(errorFound);

    });

    // This variable will hold the html response for returning as a callback
    var htmlBody = '';

    // On data received, append it to htmlBody
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
  });
};
