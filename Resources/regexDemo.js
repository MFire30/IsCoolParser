const htmlGrabber = require ('../Grabber/htmlGrabber');
const regexReader = require ('../Reader/regexReader')

exports.getGitDemo = (url) => {
  htmlGrabber.getHtmlFromHttps(url, (htmlBody) => {
    const gitRegex = /<td>(.*?)<\/td>[\s\S]<td><a href="(.*?)">/ig;
    var gits = {};

    gits = regexReader.reader (gitRegex, htmlBody, gitInterator);

    console.log('\ndemo.getGitDemo: Showing the data...');
    console.log('Users from git');
    console.log(JSON.stringify(gits));
  });
}


// Custom interatorStrategy
var gitInterator = (match) => {
  // Checking if is a valid object
  const neededSize = 2;
  const notNull = match != null;
  const enoughLength = (match.length >= neededSize);

  let result = {};

  // Creates the object or creates nothing (already clean)
  if(notNull && enoughLength) {
    result.name = match[1];
    result.link = match[2];

  } else {
    // Nothing to do
  }

  return result;
}
