// This regex is responsible for getting the discipline count
exports.disciplineCount = /<\/h5>([0-9]*?) disciplinas existentes<br><br>/ig;

// This regex is responsible for getting each class "block"
exports.disciplineBlock = /<a href=(.*?)<\/td><td>/ig;

// This regex is responsible for getting each class name
exports.disciplineNames = />(.*?)<\/a>/ig;

// This regex is responsible for getting each class url to future use (HTTP GET that data)
exports.disciplineUrl = /oferta_dados(.*?)>(.*?)<\/a>/ig;

//This regex is responsible for getting all class codes
exports.disciplineCode = /cod=([0-9]*)/ig;
